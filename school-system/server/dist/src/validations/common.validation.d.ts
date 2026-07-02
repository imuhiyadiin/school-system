import { z } from "zod";
export declare const idParamSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const studentIdParamSchema: z.ZodObject<{
    params: z.ZodObject<{
        studentId: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const paginationQuerySchema: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        search: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const idsBodySchema: z.ZodObject<{
    body: z.ZodObject<{
        ids: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=common.validation.d.ts.map