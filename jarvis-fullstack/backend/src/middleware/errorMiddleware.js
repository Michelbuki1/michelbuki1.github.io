import logger from '../utils/logger.js';

/**
 * Error Handling Middleware
 * Handles all errors gracefully and returns appropriate responses
 */
export default function errorMiddleware(err, req, res, next) {
  // Log the error
  logger.error(`[ErrorMiddleware] ${err.message}`, {
    requestId: req.requestId,
    stack: err.stack,
    path: req.path,
    method: req.method
  });

  // Determine status code
  const statusCode = err.statusCode || err.status || 500;

  // Don't leak error details in production
  const isProduction = process.env.NODE_ENV === 'production';
  
  const response = {
    success: false,
    error: isProduction && statusCode === 500 ? 'Internal server error' : err.message,
    requestId: req.requestId
  };

  // Include stack trace in development
  if (!isProduction && err.stack) {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
}

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Not Found Error
 */
export class NotFoundError extends ApiError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

/**
 * Bad Request Error
 */
export class BadRequestError extends ApiError {
  constructor(message = 'Bad request') {
    super(message, 400);
  }
}

/**
 * Unauthorized Error
 */
export class UnauthorizedError extends ApiError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

/**
 * Forbidden Error
 */
export class ForbiddenError extends ApiError {
  constructor(message = 'Forbidden') {
    super(message, 403);
  }
}
