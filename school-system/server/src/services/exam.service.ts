import prisma from "../config/prisma.js";

const gradeFromMarks = (marks: number) => {
  if (marks >= 90) return { grade: "A", gpa: 4 };
  if (marks >= 80) return { grade: "B", gpa: 3 };
  if (marks >= 70) return { grade: "C", gpa: 2 };
  if (marks >= 60) return { grade: "D", gpa: 1 };
  return { grade: "F", gpa: 0 };
};

export const examService = {
  create: (data: any) => prisma.exam.create({ data }),
  schedule: (id: number, data: any) =>
    prisma.exam.update({ where: { id }, data: { ...data, status: "SCHEDULED" } }),
  assignSubjects: (examId: number, subjects: any[]) =>
    prisma.examSubject.createMany({
      data: subjects.map((subject) => ({ ...subject, examId })),
      skipDuplicates: true,
    }),
  enterMarks: (data: any) => {
    const calculated = gradeFromMarks(data.marks);
    return prisma.result.upsert({
      where: {
        studentId_subjectId_examId: {
          studentId: data.studentId,
          subjectId: data.subjectId,
          examId: data.examId,
        },
      },
      update: { marks: data.marks, ...calculated },
      create: { ...data, ...calculated },
    });
  },
  updateMarks: (data: any) => examService.enterMarks(data),
  publishResults: (examId: number) =>
    prisma.$transaction([
      prisma.result.updateMany({ where: { examId }, data: { published: true } }),
      prisma.exam.update({ where: { id: examId }, data: { status: "PUBLISHED" } }),
    ]),
};

export const resultService = {
  studentResults: (studentId: number) =>
    prisma.result.findMany({
      where: { studentId, published: true },
      include: { exam: true, subject: true },
    }),

  classResults: async (classId: number, examId?: number) => {
    const students = await prisma.classStudent.findMany({ where: { classId }, select: { studentId: true } });
    return prisma.result.findMany({
      where: {
        studentId: { in: students.map((student) => student.studentId) },
        ...(examId ? { examId } : {}),
      },
      include: { student: { include: { user: true } }, subject: true, exam: true },
    });
  },

  ranking: async (classId: number, examId: number) => {
    const results = await resultService.classResults(classId, examId);
    const totals = new Map<number, { studentId: number; name: string; total: number; averageGpa: number; count: number }>();

    for (const result of results) {
      const current = totals.get(result.studentId) ?? {
        studentId: result.studentId,
        name: result.student.user.name,
        total: 0,
        averageGpa: 0,
        count: 0,
      };
      current.total += result.marks;
      current.averageGpa += result.gpa ?? 0;
      current.count += 1;
      totals.set(result.studentId, current);
    }

    return [...totals.values()]
      .map((item) => ({ ...item, averageGpa: item.count ? item.averageGpa / item.count : 0 }))
      .sort((a, b) => b.total - a.total)
      .map((item, index) => ({ rank: index + 1, ...item }));
  },
};
