import { z } from "zod";

const roleSchema = z.enum(["ADMIN", "TEACHER", "STUDENT", "PARENT"]);

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.email(),
    password: z.string().min(8),
    role: roleSchema,
    isActive: z.boolean().optional(),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: z.object({
    name: z.string().min(2).optional(),
    email: z.email().optional(),
    password: z.string().min(8).optional(),
    isActive: z.boolean().optional(),
  }),
});

export const updateUserRoleSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: z.object({
    role: roleSchema,
  }),
});

export const setUserActiveSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: z.object({
    isActive: z.boolean(),
  }),
});
