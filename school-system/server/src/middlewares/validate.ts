import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";

type RequestParts = {
  body?: unknown;
  params?: unknown;
  query?: unknown;
};

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: result.error.flatten(),
      });
    }

    const data = result.data as RequestParts;
    req.body = data.body ?? req.body;
    req.params = data.params as Request["params"] ?? req.params;
    req.query = data.query as Request["query"] ?? req.query;
    return next();
  };
