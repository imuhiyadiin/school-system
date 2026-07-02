import prisma from "../config/prisma.js";
import { AppError } from "../utils/AppError.js";
import { hashPassword } from "../utils/password.js";
const defaultPassword = "Password123";
export const studentService = {
    async create(data) {
        const password = await hashPassword(data.password ?? defaultPassword);
        return prisma.student.create({
            data: {
                admissionNo: data.admissionNo,
                dob: data.dob,
                gender: data.gender,
                address: data.address,
                phone: data.phone,
                ...(data.parentId ? { parent: { connect: { id: data.parentId } } } : {}),
                user: { create: { name: data.name, email: data.email, password, role: "STUDENT" } },
            },
            include: { user: true, parent: { include: { user: true } } },
        });
    },
    async update(id, data) {
        const student = await prisma.student.findUnique({ where: { id }, include: { user: true } });
        if (!student)
            throw new AppError("Student not found", 404);
        const updateData = {
            admissionNo: data.admissionNo,
            dob: data.dob,
            gender: data.gender,
            address: data.address,
            phone: data.phone,
        };
        if (data.parentId)
            updateData.parent = { connect: { id: data.parentId } };
        if (data.name || data.email)
            updateData.user = { update: { name: data.name, email: data.email } };
        return prisma.student.update({
            where: { id },
            data: updateData,
            include: { user: true, parent: { include: { user: true } } },
        });
    },
    async delete(id) {
        return prisma.student.delete({ where: { id } });
    },
    async get(id) {
        const student = await prisma.student.findUnique({
            where: { id },
            include: { user: true, parent: { include: { user: true } }, classes: true },
        });
        if (!student)
            throw new AppError("Student not found", 404);
        return student;
    },
    async list(page, limit, skip, search) {
        const where = search
            ? {
                OR: [
                    { admissionNo: { contains: search, mode: "insensitive" } },
                    { user: { name: { contains: search, mode: "insensitive" } } },
                    { user: { email: { contains: search, mode: "insensitive" } } },
                ],
            }
            : {};
        const [items, total] = await Promise.all([
            prisma.student.findMany({ where, skip, take: limit, include: { user: true, parent: true } }),
            prisma.student.count({ where }),
        ]);
        return { items, meta: { page, limit, total, pages: Math.ceil(total / limit) } };
    },
};
export const teacherService = {
    async create(data) {
        const password = await hashPassword(data.password ?? defaultPassword);
        return prisma.teacher.create({
            data: {
                employeeNo: data.employeeNo,
                dob: data.dob,
                gender: data.gender,
                address: data.address,
                phone: data.phone,
                user: { create: { name: data.name, email: data.email, password, role: "TEACHER" } },
            },
            include: { user: true },
        });
    },
    async update(id, data) {
        const updateData = {
            employeeNo: data.employeeNo,
            dob: data.dob,
            gender: data.gender,
            address: data.address,
            phone: data.phone,
        };
        if (data.name || data.email)
            updateData.user = { update: { name: data.name, email: data.email } };
        return prisma.teacher.update({
            where: { id },
            data: updateData,
            include: { user: true },
        });
    },
    async delete(id) {
        return prisma.teacher.delete({ where: { id } });
    },
    async get(id) {
        const teacher = await prisma.teacher.findUnique({ where: { id }, include: { user: true, classes: true, subjects: true } });
        if (!teacher)
            throw new AppError("Teacher not found", 404);
        return teacher;
    },
    async list() {
        return prisma.teacher.findMany({ include: { user: true } });
    },
};
export const parentService = {
    async create(data) {
        const password = await hashPassword(data.password ?? defaultPassword);
        return prisma.parent.create({
            data: {
                phone: data.phone,
                address: data.address,
                occupation: data.occupation,
                user: { create: { name: data.name, email: data.email, password, role: "PARENT" } },
            },
            include: { user: true, students: true },
        });
    },
    async update(id, data) {
        const updateData = {
            phone: data.phone,
            address: data.address,
            occupation: data.occupation,
        };
        if (data.name || data.email)
            updateData.user = { update: { name: data.name, email: data.email } };
        return prisma.parent.update({
            where: { id },
            data: updateData,
            include: { user: true, students: true },
        });
    },
    async delete(id) {
        return prisma.parent.delete({ where: { id } });
    },
    async get(id) {
        const parent = await prisma.parent.findUnique({ where: { id }, include: { user: true, students: true } });
        if (!parent)
            throw new AppError("Parent not found", 404);
        return parent;
    },
    async list() {
        return prisma.parent.findMany({ include: { user: true, students: true } });
    },
};
//# sourceMappingURL=person.service.js.map