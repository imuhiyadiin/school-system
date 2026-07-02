import prisma from "../config/prisma.js";
export const feeService = {
    createStructure: (data) => prisma.feeStructure.create({ data }),
    recordPayment: (data) => prisma.feePayment.create({ data }),
    paymentHistory: (studentId) => prisma.feePayment.findMany({
        where: { studentId },
        include: { feeStructure: true },
        orderBy: { paidAt: "desc" },
    }),
    outstandingFees: async (studentId) => {
        const studentClasses = await prisma.classStudent.findMany({ where: { studentId }, select: { classId: true } });
        const structures = await prisma.feeStructure.findMany({
            where: { classId: { in: studentClasses.map((item) => item.classId) } },
            include: { payments: { where: { studentId } } },
        });
        return structures
            .map((fee) => {
            const paid = fee.payments.reduce((sum, payment) => sum + payment.amount, 0);
            return { ...fee, paid, outstanding: fee.amount - paid };
        })
            .filter((fee) => fee.outstanding > 0);
    },
    monthlyReport: (month, year) => {
        const start = new Date(year, month - 1, 1);
        const end = new Date(year, month, 1);
        return prisma.feePayment.aggregate({
            where: { paidAt: { gte: start, lt: end } },
            _sum: { amount: true },
            _count: { id: true },
        });
    },
};
//# sourceMappingURL=fee.service.js.map