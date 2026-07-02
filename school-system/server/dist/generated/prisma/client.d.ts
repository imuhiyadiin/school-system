import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken = Prisma.RefreshTokenModel;
/**
 * Model PasswordResetToken
 *
 */
export type PasswordResetToken = Prisma.PasswordResetTokenModel;
/**
 * Model Student
 *
 */
export type Student = Prisma.StudentModel;
/**
 * Model Teacher
 *
 */
export type Teacher = Prisma.TeacherModel;
/**
 * Model Parent
 *
 */
export type Parent = Prisma.ParentModel;
/**
 * Model Class
 *
 */
export type Class = Prisma.ClassModel;
/**
 * Model ClassStudent
 *
 */
export type ClassStudent = Prisma.ClassStudentModel;
/**
 * Model ClassTeacher
 *
 */
export type ClassTeacher = Prisma.ClassTeacherModel;
/**
 * Model Subject
 *
 */
export type Subject = Prisma.SubjectModel;
/**
 * Model SubjectTeacher
 *
 */
export type SubjectTeacher = Prisma.SubjectTeacherModel;
/**
 * Model Attendance
 *
 */
export type Attendance = Prisma.AttendanceModel;
/**
 * Model Exam
 *
 */
export type Exam = Prisma.ExamModel;
/**
 * Model ExamSubject
 *
 */
export type ExamSubject = Prisma.ExamSubjectModel;
/**
 * Model Result
 *
 */
export type Result = Prisma.ResultModel;
/**
 * Model FeeStructure
 *
 */
export type FeeStructure = Prisma.FeeStructureModel;
/**
 * Model FeePayment
 *
 */
export type FeePayment = Prisma.FeePaymentModel;
//# sourceMappingURL=client.d.ts.map