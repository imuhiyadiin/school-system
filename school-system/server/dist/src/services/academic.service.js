import prisma from "../config/prisma.js";
export const classService = {
    create: (data) => prisma.class.create({ data }),
    update: (id, data) => prisma.class.update({ where: { id }, data }),
    delete: (id) => prisma.class.delete({ where: { id } }),
    get: (id) => prisma.class.findUnique({
        where: { id },
        include: { students: { include: { student: { include: { user: true } } } }, teachers: true, subjects: true },
    }),
    list: () => prisma.class.findMany({ include: { students: true, teachers: true, subjects: true } }),
    assignStudents: async (classId, ids) => prisma.classStudent.createMany({
        data: ids.map((studentId) => ({ studentId, classId })),
        skipDuplicates: true,
    }),
    assignTeachers: async (classId, ids) => prisma.classTeacher.createMany({
        data: ids.map((teacherId) => ({ teacherId, classId })),
        skipDuplicates: true,
    }),
};
export const subjectService = {
    async create(data) {
        const teacherId = data.teacherId;
        delete data.teacherId;
        const subject = await prisma.subject.create({ data });
        if (teacherId) {
            await prisma.subjectTeacher.create({ data: { subjectId: subject.id, teacherId } });
        }
        return subject;
    },
    update: (id, data) => prisma.subject.update({ where: { id }, data }),
    delete: (id) => prisma.subject.delete({ where: { id } }),
    get: (id) => prisma.subject.findUnique({ where: { id }, include: { teachers: true, class: true } }),
    list: () => prisma.subject.findMany({ include: { teachers: true, class: true } }),
    assignTeacher: (subjectId, teacherId) => prisma.subjectTeacher.create({ data: { subjectId, teacherId } }),
};
//# sourceMappingURL=academic.service.js.map