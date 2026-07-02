import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";
export declare const validate: (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
//# sourceMappingURL=validate.d.ts.map