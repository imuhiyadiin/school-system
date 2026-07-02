export declare const feeService: {
    createStructure: (data: any) => import("../../generated/prisma/models.js").Prisma__FeeStructureClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        classId: number;
        title: string;
        amount: number;
        dueDate: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    recordPayment: (data: any) => import("../../generated/prisma/models.js").Prisma__FeePaymentClient<{
        createdAt: Date;
        id: number;
        studentId: number;
        status: import("../../generated/prisma/enums.js").PaymentStatus;
        amount: number;
        feeStructureId: number;
        method: string;
        reference: string | null;
        paidAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    paymentHistory: (studentId: number) => import("../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        feeStructure: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            classId: number;
            title: string;
            amount: number;
            dueDate: Date;
        };
    } & {
        createdAt: Date;
        id: number;
        studentId: number;
        status: import("../../generated/prisma/enums.js").PaymentStatus;
        amount: number;
        feeStructureId: number;
        method: string;
        reference: string | null;
        paidAt: Date;
    })[]>;
    outstandingFees: (studentId: number) => Promise<{
        paid: number;
        outstanding: number;
        payments: {
            createdAt: Date;
            id: number;
            studentId: number;
            status: import("../../generated/prisma/enums.js").PaymentStatus;
            amount: number;
            feeStructureId: number;
            method: string;
            reference: string | null;
            paidAt: Date;
        }[];
        createdAt: Date;
        updatedAt: Date;
        id: number;
        classId: number;
        title: string;
        amount: number;
        dueDate: Date;
    }[]>;
    monthlyReport: (month: number, year: number) => import("../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<import("../../generated/prisma/models.js").GetFeePaymentAggregateType<{
        where: {
            paidAt: {
                gte: Date;
                lt: Date;
            };
        };
        _sum: {
            amount: true;
        };
        _count: {
            id: true;
        };
    }>>;
};
//# sourceMappingURL=fee.service.d.ts.map