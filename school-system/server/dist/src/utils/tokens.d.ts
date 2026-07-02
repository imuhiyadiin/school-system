type JwtPayload = {
    id: number;
    email: string;
    role: string;
};
export declare const signAccessToken: (payload: JwtPayload) => string;
export declare const signRefreshToken: (payload: JwtPayload) => string;
export declare const verifyAccessToken: (token: string) => JwtPayload;
export declare const verifyRefreshToken: (token: string) => JwtPayload;
export declare const sha256: (value: string) => string;
export declare const randomToken: () => string;
export {};
//# sourceMappingURL=tokens.d.ts.map