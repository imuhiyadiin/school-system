export declare const authService: {
    register(data: {
        name: string;
        email: string;
        password: string;
        role: string;
    }): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        email: string;
        role: import("../../generated/prisma/enums.js").RoleType;
    }>;
    login(email: string, password: string): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: import("../../generated/prisma/enums.js").RoleType;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
    }>;
    logout(refreshToken: string): Promise<void>;
    changePassword(userId: number, currentPassword: string, newPassword: string): Promise<void>;
    forgotPassword(email: string): Promise<string | null>;
    resetPassword(token: string, newPassword: string): Promise<void>;
};
//# sourceMappingURL=auth.service.d.ts.map