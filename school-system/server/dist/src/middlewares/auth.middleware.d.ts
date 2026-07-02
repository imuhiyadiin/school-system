import type { NextFunction, Request, Response } from "express";
export declare const authenticate: (req: Request, _res: Response, next: NextFunction) => void;
export declare const authorize: (...roles: string[]) => (req: Request, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map