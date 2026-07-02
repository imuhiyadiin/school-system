import type { UserData } from "../secure/generate-token.js";
import type { NextFunction, Request, Response } from "express";
export interface AuthRequest extends Request {
    user?: UserData;
}
export declare const verifyToken: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=Auth.d.ts.map