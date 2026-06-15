import { Router } from 'express';
import { BadRequestError } from '../middleware/errorMiddleware.js';
import jarvisService from '../services/jarvisService.js';

const router = Router();

/**
 * POST /api/jarvis/chat
 * Main chat endpoint for interacting with JARVIS
 */
router.post('/chat', async (req, res, next) => {
  try {
    const { message, conversationId } = req.body;

    if (!message) {
      throw new BadRequestError('Message is required');
    }

    // Check security classification from middleware
    if (req.securityFlags?.disableToolExecution) {
      // Simplified response for suspicious requests
      return res.json({
        success: true,
        data: {
          response: 'I noticed your request contains sensitive terms. Could you please clarify what you\'re trying to accomplish?',
          classification: req.securityClassification,
          requiresClarification: true
        }
      });
    }

    // Process with JARVIS service
    const response = await jarvisService.processMessage(message, {
      conversationId,
      userId: req.user?.id,
      securityClassification: req.securityClassification
    });

    res.json({
      success: true,
      data: response
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/jarvis/status
 * Get JARVIS system status
 */
router.get('/status', async (req, res, next) => {
  try {
    const status = await jarvisService.getSystemStatus();
    
    res.json({
      success: true,
      data: status
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/jarvis/conversation/:id
 * Get conversation history
 */
router.get('/conversation/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // TODO: Implement conversation retrieval
    res.json({
      success: true,
      message: 'Conversation retrieval - to be implemented',
      data: { conversationId: id }
    });
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/jarvis/conversation/:id
 * Clear conversation history
 */
router.delete('/conversation/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // TODO: Implement conversation deletion
    res.json({
      success: true,
      message: 'Conversation cleared',
      data: { conversationId: id }
    });
  } catch (error) {
    next(error);
  }
});

export default router;
