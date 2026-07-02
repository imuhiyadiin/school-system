export declare const studentService: {
    create(data: any): Promise<{
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
        parent: ({
            user: {
                name: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                email: string;
                password: string;
                role: import("../../generated/prisma/enums.js").RoleType;
                isActive: boolean;
                lastLoginAt: Date | null;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            address: string | null;
            phone: string | null;
            occupation: string | null;
            userId: number;
        }) | null;
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        admissionNo: string;
        dob: Date | null;
        gender: string | null;
        address: string | null;
        phone: string | null;
        parentId: number | null;
        userId: number;
    }>;
    update(id: number, data: any): Promise<{
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
        parent: ({
            user: {
                name: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                email: string;
                password: string;
                role: import("../../generated/prisma/enums.js").RoleType;
                isActive: boolean;
                lastLoginAt: Date | null;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            address: string | null;
            phone: string | null;
            occupation: string | null;
            userId: number;
        }) | null;
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        admissionNo: string;
        dob: Date | null;
        gender: string | null;
        address: string | null;
        phone: string | null;
        parentId: number | null;
        userId: number;
    }>;
    delete(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        admissionNo: string;
        dob: Date | null;
        gender: string | null;
        address: string | null;
        phone: string | null;
        parentId: number | null;
        userId: number;
    }>;
    get(id: number): Promise<{
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
        parent: ({
            user: {
                name: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                email: string;
                password: string;
                role: import("../../generated/prisma/enums.js").RoleType;
                isActive: boolean;
                lastLoginAt: Date | null;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            address: string | null;
            phone: string | null;
            occupation: string | null;
            userId: number;
        }) | null;
        classes: {
            classId: number;
            assignedAt: Date;
            studentId: number;
        }[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        admissionNo: string;
        dob: Date | null;
        gender: string | null;
        address: string | null;
        phone: string | null;
        parentId: number | null;
        userId: number;
    }>;
    list(page: number, limit: number, skip: number, search?: string): Promise<{
        items: ({
            user: {
                name: string;
                createdAt: Date;
                updatedAt: Date;
                id: number;
                email: string;
                password: string;
                role: import("../../generated/prisma/enums.js").RoleType;
                isActive: boolean;
                lastLoginAt: Date | null;
            };
            parent: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                address: string | null;
                phone: string | null;
                occupation: string | null;
                userId: number;
            } | null;
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            admissionNo: string;
            dob: Date | null;
            gender: string | null;
            address: string | null;
            phone: string | null;
            parentId: number | null;
            userId: number;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
};
export declare const teacherService: {
    create(data: any): Promise<{
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        dob: Date | null;
        gender: string | null;
        address: string | null;
        phone: string | null;
        employeeNo: string;
        userId: number;
    }>;
    update(id: number, data: any): Promise<{
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        dob: Date | null;
        gender: string | null;
        address: string | null;
        phone: string | null;
        employeeNo: string;
        userId: number;
    }>;
    delete(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        dob: Date | null;
        gender: string | null;
        address: string | null;
        phone: string | null;
        employeeNo: string;
        userId: number;
    }>;
    get(id: number): Promise<{
        subjects: {
            assignedAt: Date;
            subjectId: number;
            teacherId: number;
        }[];
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
        classes: {
            classId: number;
            assignedAt: Date;
            teacherId: number;
        }[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        dob: Date | null;
        gender: string | null;
        address: string | null;
        phone: string | null;
        employeeNo: string;
        userId: number;
    }>;
    list(): Promise<({
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        dob: Date | null;
        gender: string | null;
        address: string | null;
        phone: string | null;
        employeeNo: string;
        userId: number;
    })[]>;
};
export declare const parentService: {
    create(data: any): Promise<{
        students: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            admissionNo: string;
            dob: Date | null;
            gender: string | null;
            address: string | null;
            phone: string | null;
            parentId: number | null;
            userId: number;
        }[];
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string | null;
        phone: string | null;
        occupation: string | null;
        userId: number;
    }>;
    update(id: number, data: any): Promise<{
        students: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            admissionNo: string;
            dob: Date | null;
            gender: string | null;
            address: string | null;
            phone: string | null;
            parentId: number | null;
            userId: number;
        }[];
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string | null;
        phone: string | null;
        occupation: string | null;
        userId: number;
    }>;
    delete(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string | null;
        phone: string | null;
        occupation: string | null;
        userId: number;
    }>;
    get(id: number): Promise<{
        students: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            admissionNo: string;
            dob: Date | null;
            gender: string | null;
            address: string | null;
            phone: string | null;
            parentId: number | null;
            userId: number;
        }[];
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string | null;
        phone: string | null;
        occupation: string | null;
        userId: number;
    }>;
    list(): Promise<({
        students: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            admissionNo: string;
            dob: Date | null;
            gender: string | null;
            address: string | null;
            phone: string | null;
            parentId: number | null;
            userId: number;
        }[];
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            email: string;
            password: string;
            role: import("../../generated/prisma/enums.js").RoleType;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        address: string | null;
        phone: string | null;
        occupation: string | null;
        userId: number;
    })[]>;
};
//# sourceMappingURL=person.service.d.ts.map