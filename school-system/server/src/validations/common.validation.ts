import { z } from "zod";

export const idParamSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
});

export const studentIdParamSchema = z.object({
  params: z.object({
    studentId: z.coerce.number().int().positive(),
  }),
});

export const paginationQuerySchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().max(100).optional(),
    search: z.string().optional(),
  }),
});

export const idsBodySchema = z.object({
  body: z.object({
    ids: z.array(z.number().int().positive()).min(1),
  }),
});
