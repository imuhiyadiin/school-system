import { z } from "zod";
export declare const createUserSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodEmail;
        password: z.ZodString;
        role: z.ZodEnum<{
            ADMIN: "ADMIN";
            TEACHER: "TEACHER";
            STUDENT: "STUDENT";
            PARENT: "PARENT";
        }>;
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodEmail>;
        password: z.ZodOptional<z.ZodString>;
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const updateUserRoleSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    body: z.ZodObject<{
        role: z.ZodEnum<{
            ADMIN: "ADMIN";
            TEACHER: "TEACHER";
            STUDENT: "STUDENT";
            PARENT: "PARENT";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const setUserActiveSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    body: z.ZodObject<{
        isActive: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=user.validation.d.ts.map