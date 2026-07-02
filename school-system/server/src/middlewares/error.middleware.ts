import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
import { env } from "../config/env.js";

export const notFound = (req: Request, _res: Response, next: NextFunction) => {
  next(new AppError(`Route not found: ${req.method} ${req.originalUrl}`, 404));
};

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error instanceof AppError ? error.statusCode : 500;

  return res.status(statusCode).json({
    success: false,
    message: error.message || "Internal server error",
    ...(env.nodeEnv === "development" ? { stack: error.stack } : {}),
  });
};
