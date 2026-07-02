import type { NextFunction, Request, Response } from "express";
export declare const notFound: (req: Request, _res: Response, next: NextFunction) => void;
export declare const errorHandler: (error: Error, _req: Request, res: Response, _next: NextFunction) => Response<any, Record<string, any>>;
//# sourceMappingURL=error.middleware.d.ts.map