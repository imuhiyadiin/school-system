import { AppError } from "../utils/AppError.js";
import { env } from "../config/env.js";
export const notFound = (req, _res, next) => {
    next(new AppError(`Route not found: ${req.method} ${req.originalUrl}`, 404));
};
export const errorHandler = (error, _req, res, _next) => {
    const statusCode = error instanceof AppError ? error.statusCode : 500;
    return res.status(statusCode).json({
        success: false,
        message: error.message || "Internal server error",
        ...(env.nodeEnv === "development" ? { stack: error.stack } : {}),
    });
};
//# sourceMappingURL=error.middleware.js.map