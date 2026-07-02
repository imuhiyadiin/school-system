import type { Request, Response } from "express";
import type { AuthRequest } from "../middlewere/Auth.js";
export declare const registerUser: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const userLogin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const whoami: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateUser: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const allUsers: (req: AuthRequest, res: Response) => Promise<void>;
export declare const chanegRole: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=user-controller.d.ts.map