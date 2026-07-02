import type { Request } from "express";
import { AppError } from "../utils/AppError.js";

export const requireAdmin = (req: Request) => {
  if (!req.user) {
    throw new AppError("Authentication required", 401);
  }

  if (req.user.role !== "ADMIN") {
    throw new AppError("Only admin can access this resource", 403);
  }
};
