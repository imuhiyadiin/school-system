export declare const classService: {
    create: (data: any) => import("../../generated/prisma/models.js").Prisma__ClassClient<{
        name: string;
        grade: number;
        section: string | null;
        academicYear: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update: (id: number, data: any) => import("../../generated/prisma/models.js").Prisma__ClassClient<{
        name: string;
        grade: number;
        section: string | null;
        academicYear: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    delete: (id: number) => import("../../generated/prisma/models.js").Prisma__ClassClient<{
        name: string;
        grade: number;
        section: string | null;
        academicYear: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get: (id: number) => import("../../generated/prisma/models.js").Prisma__ClassClient<({
        students: ({
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
            classId: number;
            assignedAt: Date;
            studentId: number;
        })[];
        teachers: {
            classId: number;
            assignedAt: Date;
            teacherId: number;
        }[];
        subjects: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            code: string;
            description: string | null;
            classId: number | null;
        }[];
    } & {
        name: string;
        grade: number;
        section: string | null;
        academicYear: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    list: () => import("../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        students: {
            classId: number;
            assignedAt: Date;
            studentId: number;
        }[];
        teachers: {
            classId: number;
            assignedAt: Date;
            teacherId: number;
        }[];
        subjects: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            code: string;
            description: string | null;
            classId: number | null;
        }[];
    } & {
        name: string;
        grade: number;
        section: string | null;
        academicYear: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    })[]>;
    assignStudents: (classId: number, ids: number[]) => Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    assignTeachers: (classId: number, ids: number[]) => Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
};
export declare const subjectService: {
    create(data: any): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        code: string;
        description: string | null;
        classId: number | null;
    }>;
    update: (id: number, data: any) => import("../../generated/prisma/models.js").Prisma__SubjectClient<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        code: string;
        description: string | null;
        classId: number | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    delete: (id: number) => import("../../generated/prisma/models.js").Prisma__SubjectClient<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        code: string;
        description: string | null;
        classId: number | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get: (id: number) => import("../../generated/prisma/models.js").Prisma__SubjectClient<({
        teachers: {
            assignedAt: Date;
            subjectId: number;
            teacherId: number;
        }[];
        class: {
            name: string;
            grade: number;
            section: string | null;
            academicYear: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        } | null;
    } & {
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        code: string;
        description: string | null;
        classId: number | null;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    list: () => import("../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        teachers: {
            assignedAt: Date;
            subjectId: number;
            teacherId: number;
        }[];
        class: {
            name: string;
            grade: number;
            section: string | null;
            academicYear: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        } | null;
    } & {
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        code: string;
        description: string | null;
        classId: number | null;
    })[]>;
    assignTeacher: (subjectId: number, teacherId: number) => import("../../generated/prisma/models.js").Prisma__SubjectTeacherClient<{
        assignedAt: Date;
        subjectId: number;
        teacherId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=academic.service.d.ts.map