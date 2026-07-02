import prisma from "../config/prisma.js";
const dayRange = (date) => {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
    return { gte: start, lt: end };
};
export const attendanceService = {
    mark: (data) => prisma.attendance.upsert({
        where: { studentId_date: { studentId: data.studentId, date: data.date } },
        update: { status: data.status, remarks: data.remarks, classId: data.classId },
        create: data,
    }),
    dailyReport: (date) => prisma.attendance.findMany({
        where: { date: dayRange(date) },
        include: { student: { include: { user: true } } },
    }),
    monthlyReport: (month, year) => {
        const start = new Date(year, month - 1, 1);
        const end = new Date(year, month, 1);
        return prisma.attendance.groupBy({
            by: ["status"],
            where: { date: { gte: start, lt: end } },
            _count: { status: true },
        });
    },
    studentHistory: (studentId) => prisma.attendance.findMany({
        where: { studentId },
        orderBy: { date: "desc" },
    }),
};
//# sourceMappingURL=attendance.service.js.map