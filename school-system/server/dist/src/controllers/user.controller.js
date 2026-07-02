import prisma from "../config/prisma.js";
import { AppError } from "../utils/AppError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";
import { hashPassword } from "../utils/password.js";
const userSelect = {
    id: true,
    name: true,
    email: true,
    role: true,
    isActive: true,
    lastLoginAt: true,
    createdAt: true,
    updatedAt: true,
    student: true,
    teacher: true,
    parent: true,
};
const requireAdmin = (req) => {
    if (!req.user)
        throw new AppError("Authentication required", 401);
    if (req.user.role !== "ADMIN")
        throw new AppError("Only admin can access this resource", 403);
};
export const userController = {
    me: asyncHandler(async (req, res) => {
        if (!req.user)
            throw new AppError("Authentication required", 401);
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: userSelect,
        });
        if (!user)
            throw new AppError("User not found", 404);
        return sendSuccess(res, user, "Current user fetched");
    }),
    create: asyncHandler(async (req, res) => {
        requireAdmin(req);
        const exists = await prisma.user.findUnique({ where: { email: req.body.email } });
        if (exists)
            throw new AppError("Email already exists", 409);
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: await hashPassword(req.body.password),
                role: req.body.role,
                isActive: req.body.isActive ?? true,
            },
            select: userSelect,
        });
        return sendSuccess(res, user, "User created", 201);
    }),
    list: asyncHandler(async (req, res) => {
        requireAdmin(req);
        const search = req.query.search;
        const users = await prisma.user.findMany({
            ...(search
                ? {
                    where: {
                        OR: [
                            { name: { contains: search, mode: "insensitive" } },
                            { email: { contains: search, mode: "insensitive" } },
                        ],
                    },
                }
                : {}),
            select: userSelect,
            orderBy: { createdAt: "desc" },
        });
        return sendSuccess(res, users, "Users fetched");
    }),
    get: asyncHandler(async (req, res) => {
        requireAdmin(req);
        const user = await prisma.user.findUnique({
            where: { id: Number(req.params.id) },
            select: userSelect,
        });
        if (!user)
            throw new AppError("User not found", 404);
        return sendSuccess(res, user, "User fetched");
    }),
    update: asyncHandler(async (req, res) => {
        requireAdmin(req);
        const user = await prisma.user.update({
            where: { id: Number(req.params.id) },
            data: {
                name: req.body.name,
                email: req.body.email,
                isActive: req.body.isActive,
                ...(req.body.password ? { password: await hashPassword(req.body.password) } : {}),
            },
            select: userSelect,
        });
        return sendSuccess(res, user, "User updated");
    }),
    changeRole: asyncHandler(async (req, res) => {
        requireAdmin(req);
        const user = await prisma.user.update({
            where: { id: Number(req.params.id) },
            data: { role: req.body.role },
            select: userSelect,
        });
        return sendSuccess(res, user, "User role updated");
    }),
    setActive: asyncHandler(async (req, res) => {
        requireAdmin(req);
        const user = await prisma.user.update({
            where: { id: Number(req.params.id) },
            data: { isActive: req.body.isActive },
            select: userSelect,
        });
        return sendSuccess(res, user, "User status updated");
    }),
    delete: asyncHandler(async (req, res) => {
        requireAdmin(req);
        const userId = Number(req.params.id);
        if (req.user?.id === userId)
            throw new AppError("You cannot delete your own account", 400);
        await prisma.user.delete({ where: { id: userId } });
        return sendSuccess(res, null, "User deleted");
    }),
};
//# sourceMappingURL=user.controller.js.map