import { AppError } from "../utils/AppError.js";
export const requireAdmin = (req) => {
    if (!req.user) {
        throw new AppError("Authentication required", 401);
    }
    if (req.user.role !== "ADMIN") {
        throw new AppError("Only admin can access this resource", 403);
    }
};
//# sourceMappingURL=admin.guard.js.map