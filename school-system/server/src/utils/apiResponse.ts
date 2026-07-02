import type { Response } from "express";

export const sendSuccess = (
  res: Response,
  data: unknown,
  message = "Operation successful",
  statusCode = 200,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};
