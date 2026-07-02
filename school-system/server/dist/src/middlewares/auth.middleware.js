import { AppError } from "../utils/AppError.js";
import { verifyAccessToken } from "../utils/tokens.js";
export const authenticate = (req, _res, next) => {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) {
        return next(new AppError("Authentication token is required", 401));
    }
    const token = header.split(" ")[1];
    if (!token) {
        return next(new AppError("Authentication token is required", 401));
    }
    try {
        req.user = verifyAccessToken(token);
        return next();
    }
    catch {
        return next(new AppError("Invalid or expired token", 401));
    }
};
export const authorize = (...roles) => (req, _res, next) => {
    if (!req.user) {
        return next(new AppError("Authentication required", 401));
    }
    if (!roles.includes(req.user.role)) {
        return next(new AppError("You do not have permission to access this resource", 403));
    }
    return next();
};
//# sourceMappingURL=auth.middleware.js.map