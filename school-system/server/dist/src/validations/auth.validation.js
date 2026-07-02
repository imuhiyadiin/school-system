import { z } from "zod";
export const registerSchema = z.object({
    body: z.object({
        name: z.string().min(2),
        email: z.email(),
        password: z.string().min(8),
        role: z.enum(["ADMIN", "TEACHER", "STUDENT", "PARENT"]).default("STUDENT"),
    }),
});
export const loginSchema = z.object({
    body: z.object({
        email: z.email(),
        password: z.string().min(1),
    }),
});
export const refreshTokenSchema = z.object({
    body: z.object({
        refreshToken: z.string().min(20),
    }),
});
export const changePasswordSchema = z.object({
    body: z.object({
        currentPassword: z.string().min(1),
        newPassword: z.string().min(8),
    }),
});
export const forgotPasswordSchema = z.object({
    body: z.object({
        email: z.email(),
    }),
});
export const resetPasswordSchema = z.object({
    body: z.object({
        token: z.string().min(20),
        newPassword: z.string().min(8),
    }),
});
//# sourceMappingURL=auth.validation.js.map