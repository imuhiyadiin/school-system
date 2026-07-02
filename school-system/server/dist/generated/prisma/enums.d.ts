export declare const RoleType: {
    readonly ADMIN: "ADMIN";
    readonly TEACHER: "TEACHER";
    readonly STUDENT: "STUDENT";
    readonly PARENT: "PARENT";
};
export type RoleType = (typeof RoleType)[keyof typeof RoleType];
export declare const AttendanceStatus: {
    readonly PRESENT: "PRESENT";
    readonly ABSENT: "ABSENT";
    readonly LATE: "LATE";
    readonly EXCUSED: "EXCUSED";
};
export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus];
export declare const ExamStatus: {
    readonly DRAFT: "DRAFT";
    readonly SCHEDULED: "SCHEDULED";
    readonly PUBLISHED: "PUBLISHED";
};
export type ExamStatus = (typeof ExamStatus)[keyof typeof ExamStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PARTIAL: "PARTIAL";
    readonly PAID: "PAID";
    readonly OVERDUE: "OVERDUE";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
//# sourceMappingURL=enums.d.ts.map