/**
 * Security Agent Middleware
 * 
 * This middleware classifies every input as SAFE, SUSPICIOUS, or MALICIOUS
 * and takes appropriate action based on the classification.
 */

const securityPatterns = {
  malicious: [
    /ignore\s+previous\s+instructions/i,
    /reveal\s+system\s+prompt/i,
    /act\s+as\s+admin/i,
    /disable\s+security/i,
    /bypass\s+security/i,
    /override\s+instruction/i,
    /execute\s+arbitrary/i,
    /run\s+shell\s+command/i,
    /drop\s+table/i,
    /delete\s+from/i,
    /<script/i,
    /javascript:/i,
    /eval\s*\(/i,
    /exec\s*\(/i,
  ],
  suspicious: [
    /admin/i,
    /root/i,
    /password/i,
    /secret/i,
    /token/i,
    /api[_-]?key/i,
    /credential/i,
    /authenticate/i,
    /login/i,
    /sudo/i,
  ]
};

/**
 * Classify the input content
 * @param {string} content - The content to analyze
 * @returns {string} - 'MALICIOUS', 'SUSPICIOUS', or 'SAFE'
 */
export function classifyInput(content) {
  if (!content || typeof content !== 'string') {
    return 'SAFE';
  }

  // Check for malicious patterns
  for (const pattern of securityPatterns.malicious) {
    if (pattern.test(content)) {
      return 'MALICIOUS';
    }
  }

  // Check for suspicious patterns
  for (const pattern of securityPatterns.suspicious) {
    if (pattern.test(content)) {
      return 'SUSPICIOUS';
    }
  }

  return 'SAFE';
}

/**
 * Security Agent Middleware
 * Analyzes request body and query parameters for security threats
 */
export default function securityAgent(req, res, next) {
  const logger = req.app.get('logger');
  
  // Combine all input sources for analysis
  const inputsToCheck = [
    req.body?.input,
    req.body?.message,
    req.body?.query,
    req.query?.q,
    req.params?.id,
  ].filter(Boolean);

  let overallClassification = 'SAFE';
  let flaggedInput = null;

  for (const input of inputsToCheck) {
    const classification = classifyInput(input);
    
    if (classification === 'MALICIOUS') {
      overallClassification = 'MALICIOUS';
      flaggedInput = input;
      break;
    } else if (classification === 'SUSPICIOUS' && overallClassification !== 'MALICIOUS') {
      overallClassification = 'SUSPICIOUS';
      flaggedInput = input;
    }
  }

  // Add security classification to request for downstream use
  req.securityClassification = overallClassification;

  if (logger) {
    logger.info(`[SecurityAgent] Classification: ${overallClassification} for request ${req.requestId}`);
  }

  // Handle MALICIOUS requests
  if (overallClassification === 'MALICIOUS') {
    if (logger) {
      logger.warn(`[SecurityAgent] Blocked malicious request: ${flaggedInput?.substring(0, 100)}`);
    }
    return res.status(403).json({
      success: false,
      error: 'Request blocked due to security policy.',
      requestId: req.requestId
    });
  }

  // Handle SUSPICIOUS requests
  if (overallClassification === 'SUSPICIOUS') {
    if (logger) {
      logger.warn(`[SecurityAgent] Suspicious request detected: ${flaggedInput?.substring(0, 100)}`);
    }
    // Mark request as requiring caution - downstream handlers should simplify responses
    req.securityFlags = {
      isSuspicious: true,
      disableToolExecution: true,
      requiresClarification: true
    };
  }

  next();
}
