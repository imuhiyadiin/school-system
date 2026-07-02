export declare const examService: {
    create: (data: any) => import("../../generated/prisma/models.js").Prisma__ExamClient<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        classId: number;
        type: string;
        status: import("../../generated/prisma/enums.js").ExamStatus;
        startDate: Date;
        endDate: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    schedule: (id: number, data: any) => import("../../generated/prisma/models.js").Prisma__ExamClient<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        classId: number;
        type: string;
        status: import("../../generated/prisma/enums.js").ExamStatus;
        startDate: Date;
        endDate: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    assignSubjects: (examId: number, subjects: any[]) => import("../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    enterMarks: (data: any) => import("../../generated/prisma/models.js").Prisma__ResultClient<{
        grade: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        subjectId: number;
        studentId: number;
        examId: number;
        marks: number;
        gpa: number | null;
        published: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    updateMarks: (data: any) => import("../../generated/prisma/models.js").Prisma__ResultClient<{
        grade: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        subjectId: number;
        studentId: number;
        examId: number;
        marks: number;
        gpa: number | null;
        published: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    publishResults: (examId: number) => Promise<[import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload, {
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        classId: number;
        type: string;
        status: import("../../generated/prisma/enums.js").ExamStatus;
        startDate: Date;
        endDate: Date;
    }]>;
};
export declare const resultService: {
    studentResults: (studentId: number) => import("../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        subject: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            code: string;
            description: string | null;
            classId: number | null;
        };
        exam: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            classId: number;
            type: string;
            status: import("../../generated/prisma/enums.js").ExamStatus;
            startDate: Date;
            endDate: Date;
        };
    } & {
        grade: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        subjectId: number;
        studentId: number;
        examId: number;
        marks: number;
        gpa: number | null;
        published: boolean;
    })[]>;
    classResults: (classId: number, examId?: number) => Promise<({
        subject: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            code: string;
            description: string | null;
            classId: number | null;
        };
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
        exam: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            classId: number;
            type: string;
            status: import("../../generated/prisma/enums.js").ExamStatus;
            startDate: Date;
            endDate: Date;
        };
    } & {
        grade: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        subjectId: number;
        studentId: number;
        examId: number;
        marks: number;
        gpa: number | null;
        published: boolean;
    })[]>;
    ranking: (classId: number, examId: number) => Promise<{
        averageGpa: number;
        studentId: number;
        name: string;
        total: number;
        count: number;
        rank: number;
    }[]>;
};
//# sourceMappingURL=exam.service.d.ts.map