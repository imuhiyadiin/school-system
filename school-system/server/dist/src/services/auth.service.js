import prisma from "../config/prisma.js";
import { AppError } from "../utils/AppError.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { randomToken, sha256, signAccessToken, signRefreshToken, verifyRefreshToken, } from "../utils/tokens.js";
const refreshExpiry = () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
const resetExpiry = () => new Date(Date.now() + 30 * 60 * 1000);
export const authService = {
    async register(data) {
        const exists = await prisma.user.findUnique({ where: { email: data.email } });
        if (exists)
            throw new AppError("Email already exists", 409);
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: await hashPassword(data.password),
                role: data.role,
            },
            select: { id: true, name: true, email: true, role: true, createdAt: true },
        });
        return user;
    },
    async login(email, password) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !(await comparePassword(password, user.password))) {
            throw new AppError("Invalid credentials", 401);
        }
        if (!user.isActive)
            throw new AppError("Account is disabled", 403);
        const payload = { id: user.id, email: user.email, role: user.role };
        const accessToken = signAccessToken(payload);
        const refreshToken = signRefreshToken(payload);
        await prisma.refreshToken.create({
            data: {
                userId: user.id,
                tokenHash: sha256(refreshToken),
                expiresAt: refreshExpiry(),
            },
        });
        await prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });
        return {
            user: { id: user.id, name: user.name, email: user.email, role: user.role },
            accessToken,
            refreshToken,
        };
    },
    async refresh(refreshToken) {
        const payload = verifyRefreshToken(refreshToken);
        const stored = await prisma.refreshToken.findUnique({ where: { tokenHash: sha256(refreshToken) } });
        if (!stored || stored.revokedAt || stored.expiresAt < new Date()) {
            throw new AppError("Invalid refresh token", 401);
        }
        return { accessToken: signAccessToken(payload) };
    },
    async logout(refreshToken) {
        await prisma.refreshToken.updateMany({
            where: { tokenHash: sha256(refreshToken), revokedAt: null },
            data: { revokedAt: new Date() },
        });
    },
    async changePassword(userId, currentPassword, newPassword) {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user || !(await comparePassword(currentPassword, user.password))) {
            throw new AppError("Current password is incorrect", 400);
        }
        await prisma.user.update({
            where: { id: userId },
            data: { password: await hashPassword(newPassword) },
        });
    },
    async forgotPassword(email) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user)
            return null;
        const token = randomToken();
        await prisma.passwordResetToken.create({
            data: { userId: user.id, tokenHash: sha256(token), expiresAt: resetExpiry() },
        });
        return token;
    },
    async resetPassword(token, newPassword) {
        const reset = await prisma.passwordResetToken.findUnique({ where: { tokenHash: sha256(token) } });
        if (!reset || reset.usedAt || reset.expiresAt < new Date()) {
            throw new AppError("Invalid or expired reset token", 400);
        }
        await prisma.$transaction([
            prisma.user.update({
                where: { id: reset.userId },
                data: { password: await hashPassword(newPassword) },
            }),
            prisma.passwordResetToken.update({
                where: { id: reset.id },
                data: { usedAt: new Date() },
            }),
        ]);
    },
};
//# sourceMappingURL=auth.service.js.map