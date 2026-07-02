import { authService } from "../services/auth.service.js";
import { AppError } from "../utils/AppError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";
export const authController = {
    register: asyncHandler(async (req, res) => {
        const user = await authService.register(req.body);
        return sendSuccess(res, user, "User registered", 201);
    }),
    login: asyncHandler(async (req, res) => {
        const result = await authService.login(req.body.email, req.body.password);
        return sendSuccess(res, result, "Login successful");
    }),
    refresh: asyncHandler(async (req, res) => {
        const result = await authService.refresh(req.body.refreshToken);
        return sendSuccess(res, result, "Token refreshed");
    }),
    logout: asyncHandler(async (req, res) => {
        await authService.logout(req.body.refreshToken);
        return sendSuccess(res, null, "Logged out");
    }),
    changePassword: asyncHandler(async (req, res) => {
        if (!req.user)
            throw new AppError("Authentication required", 401);
        await authService.changePassword(req.user.id, req.body.currentPassword, req.body.newPassword);
        return sendSuccess(res, null, "Password changed");
    }),
    forgotPassword: asyncHandler(async (req, res) => {
        const resetToken = await authService.forgotPassword(req.body.email);
        return sendSuccess(res, { resetToken }, "Password reset token generated");
    }),
    resetPassword: asyncHandler(async (req, res) => {
        await authService.resetPassword(req.body.token, req.body.newPassword);
        return sendSuccess(res, null, "Password reset successful");
    }),
};
//# sourceMappingURL=auth.controller.js.map