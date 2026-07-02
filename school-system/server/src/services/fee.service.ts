import prisma from "../config/prisma.js";

export const feeService = {
  createStructure: (data: any) => prisma.feeStructure.create({ data }),
  recordPayment: (data: any) => prisma.feePayment.create({ data }),
  paymentHistory: (studentId: number) =>
    prisma.feePayment.findMany({
      where: { studentId },
      include: { feeStructure: true },
      orderBy: { paidAt: "desc" },
    }),
  outstandingFees: async (studentId: number) => {
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
  monthlyReport: (month: number, year: number) => {
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 1);
    return prisma.feePayment.aggregate({
      where: { paidAt: { gte: start, lt: end } },
      _sum: { amount: true },
      _count: { id: true },
    });
  },
};
