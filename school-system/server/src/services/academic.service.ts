import prisma from "../config/prisma.js";

export const classService = {
  create: (data: any) => prisma.class.create({ data }),
  update: (id: number, data: any) => prisma.class.update({ where: { id }, data }),
  delete: (id: number) => prisma.class.delete({ where: { id } }),
  get: (id: number) =>
    prisma.class.findUnique({
      where: { id },
      include: { students: { include: { student: { include: { user: true } } } }, teachers: true, subjects: true },
    }),
  list: () => prisma.class.findMany({ include: { students: true, teachers: true, subjects: true } }),
  assignStudents: async (classId: number, ids: number[]) =>
    prisma.classStudent.createMany({
      data: ids.map((studentId) => ({ studentId, classId })),
      skipDuplicates: true,
    }),
  assignTeachers: async (classId: number, ids: number[]) =>
    prisma.classTeacher.createMany({
      data: ids.map((teacherId) => ({ teacherId, classId })),
      skipDuplicates: true,
    }),
};

export const subjectService = {
  async create(data: any) {
    const teacherId = data.teacherId;
    delete data.teacherId;
    const subject = await prisma.subject.create({ data });
    if (teacherId) {
      await prisma.subjectTeacher.create({ data: { subjectId: subject.id, teacherId } });
    }
    return subject;
  },
  update: (id: number, data: any) => prisma.subject.update({ where: { id }, data }),
  delete: (id: number) => prisma.subject.delete({ where: { id } }),
  get: (id: number) => prisma.subject.findUnique({ where: { id }, include: { teachers: true, class: true } }),
  list: () => prisma.subject.findMany({ include: { teachers: true, class: true } }),
  assignTeacher: (subjectId: number, teacherId: number) =>
    prisma.subjectTeacher.create({ data: { subjectId, teacherId } }),
};
