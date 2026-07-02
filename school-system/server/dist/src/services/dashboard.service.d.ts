export declare const dashboardService: {
    summary(): Promise<{
        totalStudents: number;
        totalTeachers: number;
        totalClasses: number;
        attendanceStats: (import("../../generated/prisma/internal/prismaNamespace.js").PickEnumerable<import("../../generated/prisma/models.js").AttendanceGroupByOutputType, "status"[]> & {
            _count: {
                status: number;
            };
        })[];
        revenueStats: import("../../generated/prisma/models.js").GetFeePaymentAggregateType<{
            _sum: {
                amount: true;
            };
            _count: {
                id: true;
            };
        }>;
    }>;
};
//# sourceMappingURL=dashboard.service.d.ts.map