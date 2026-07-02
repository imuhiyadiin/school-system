import prisma from "../config/prisma.js";
export const dashboardService = {
    async summary() {
        const [totalStudents, totalTeachers, totalClasses, attendanceStats, revenueStats] = await Promise.all([
            prisma.student.count(),
            prisma.teacher.count(),
            prisma.class.count(),
            prisma.attendance.groupBy({ by: ["status"], _count: { status: true } }),
            prisma.feePayment.aggregate({ _sum: { amount: true }, _count: { id: true } }),
        ]);
        return {
            totalStudents,
            totalTeachers,
            totalClasses,
            attendanceStats,
            revenueStats,
        };
    },
};
//# sourceMappingURL=dashboard.service.js.map