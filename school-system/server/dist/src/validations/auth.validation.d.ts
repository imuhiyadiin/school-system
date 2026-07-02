import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodEmail;
        password: z.ZodString;
        role: z.ZodDefault<z.ZodEnum<{
            ADMIN: "ADMIN";
            TEACHER: "TEACHER";
            STUDENT: "STUDENT";
            PARENT: "PARENT";
        }>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodEmail;
        password: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const refreshTokenSchema: z.ZodObject<{
    body: z.ZodObject<{
        refreshToken: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const changePasswordSchema: z.ZodObject<{
    body: z.ZodObject<{
        currentPassword: z.ZodString;
        newPassword: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const forgotPasswordSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodEmail;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const resetPasswordSchema: z.ZodObject<{
    body: z.ZodObject<{
        token: z.ZodString;
        newPassword: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=auth.validation.d.ts.map