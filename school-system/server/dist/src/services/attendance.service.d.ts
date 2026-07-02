export declare const attendanceService: {
    mark: (data: any) => import("../../generated/prisma/models.js").Prisma__AttendanceClient<{
        createdAt: Date;
        id: number;
        classId: number | null;
        studentId: number;
        date: Date;
        status: import("../../generated/prisma/enums.js").AttendanceStatus;
        remarks: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    dailyReport: (date: Date) => import("../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        student: {
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
            admissionNo: string;
            dob: Date | null;
            gender: string | null;
            address: string | null;
            phone: string | null;
            parentId: number | null;
            userId: number;
        };
    } & {
        createdAt: Date;
        id: number;
        classId: number | null;
        studentId: number;
        date: Date;
        status: import("../../generated/prisma/enums.js").AttendanceStatus;
        remarks: string | null;
    })[]>;
    monthlyReport: (month: number, year: number) => import("../../generated/prisma/models.js").GetAttendanceGroupByPayload<{
        by: "status"[];
        where: {
            date: {
                gte: Date;
                lt: Date;
            };
        };
        _count: {
            status: true;
        };
    }>;
    studentHistory: (studentId: number) => import("../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        createdAt: Date;
        id: number;
        classId: number | null;
        studentId: number;
        date: Date;
        status: import("../../generated/prisma/enums.js").AttendanceStatus;
        remarks: string | null;
    }[]>;
};
//# sourceMappingURL=attendance.service.d.ts.map