import { z } from "zod";

export const markAttendanceSchema = z.object({
  body: z.object({
    studentId: z.number().int().positive(),
    classId: z.number().int().positive().optional(),
    date: z.coerce.date(),
    status: z.enum(["PRESENT", "ABSENT", "LATE", "EXCUSED"]),
    remarks: z.string().optional(),
  }),
});

export const attendanceDateQuerySchema = z.object({
  query: z.object({
    date: z.coerce.date().optional(),
  }),
});

export const attendanceMonthlyQuerySchema = z.object({
  query: z.object({
    month: z.coerce.number().int().min(1).max(12),
    year: z.coerce.number().int().positive(),
  }),
});

export const attendanceStudentQuerySchema = z.object({
  query: z.object({
    studentId: z.coerce.number().int().positive(),
  }),
});

export const createExamSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    type: z.string().min(1),
    classId: z.number().int().positive(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
  }),
});

export const scheduleExamSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: z.object({ startDate: z.coerce.date(), endDate: z.coerce.date() }),
});

export const assignExamSubjectsSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: z.object({
    subjects: z.array(
      z.object({
        subjectId: z.number().int().positive(),
        examDate: z.coerce.date().optional(),
        maxMarks: z.number().int().positive().default(100),
      }),
    ),
  }),
});

export const marksSchema = z.object({
  body: z.object({
    studentId: z.number().int().positive(),
    subjectId: z.number().int().positive(),
    examId: z.number().int().positive(),
    marks: z.number().min(0),
  }),
});

export const createFeeStructureSchema = z.object({
  body: z.object({
    classId: z.number().int().positive(),
    title: z.string().min(1),
    amount: z.number().positive(),
    dueDate: z.coerce.date(),
  }),
});

export const recordPaymentSchema = z.object({
  body: z.object({
    studentId: z.number().int().positive(),
    feeStructureId: z.number().int().positive(),
    amount: z.number().positive(),
    method: z.string().min(1),
    reference: z.string().optional(),
  }),
});

export const classResultQuerySchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  query: z.object({
    examId: z.coerce.number().int().positive().optional(),
  }),
});

export const rankingQuerySchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  query: z.object({
    examId: z.coerce.number().int().positive(),
  }),
});
