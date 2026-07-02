import { z } from "zod";
export declare const markAttendanceSchema: z.ZodObject<{
    body: z.ZodObject<{
        studentId: z.ZodNumber;
        classId: z.ZodOptional<z.ZodNumber>;
        date: z.ZodCoercedDate<unknown>;
        status: z.ZodEnum<{
            PRESENT: "PRESENT";
            ABSENT: "ABSENT";
            LATE: "LATE";
            EXCUSED: "EXCUSED";
        }>;
        remarks: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const attendanceDateQuerySchema: z.ZodObject<{
    query: z.ZodObject<{
        date: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const attendanceMonthlyQuerySchema: z.ZodObject<{
    query: z.ZodObject<{
        month: z.ZodCoercedNumber<unknown>;
        year: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const attendanceStudentQuerySchema: z.ZodObject<{
    query: z.ZodObject<{
        studentId: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const createExamSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        classId: z.ZodNumber;
        startDate: z.ZodCoercedDate<unknown>;
        endDate: z.ZodCoercedDate<unknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const scheduleExamSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    body: z.ZodObject<{
        startDate: z.ZodCoercedDate<unknown>;
        endDate: z.ZodCoercedDate<unknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const assignExamSubjectsSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    body: z.ZodObject<{
        subjects: z.ZodArray<z.ZodObject<{
            subjectId: z.ZodNumber;
            examDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
            maxMarks: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const marksSchema: z.ZodObject<{
    body: z.ZodObject<{
        studentId: z.ZodNumber;
        subjectId: z.ZodNumber;
        examId: z.ZodNumber;
        marks: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const createFeeStructureSchema: z.ZodObject<{
    body: z.ZodObject<{
        classId: z.ZodNumber;
        title: z.ZodString;
        amount: z.ZodNumber;
        dueDate: z.ZodCoercedDate<unknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const recordPaymentSchema: z.ZodObject<{
    body: z.ZodObject<{
        studentId: z.ZodNumber;
        feeStructureId: z.ZodNumber;
        amount: z.ZodNumber;
        method: z.ZodString;
        reference: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const classResultQuerySchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    query: z.ZodObject<{
        examId: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const rankingQuerySchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    query: z.ZodObject<{
        examId: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=operations.validation.d.ts.map