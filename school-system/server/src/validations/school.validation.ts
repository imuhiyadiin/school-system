import { z } from "zod";

const userInput = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8).optional(),
});

export const createStudentSchema = z.object({
  body: userInput.extend({
    admissionNo: z.string().min(1),
    dob: z.coerce.date().optional(),
    gender: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().optional(),
    parentId: z.number().int().positive().optional(),
  }),
});

export const updateStudentSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: createStudentSchema.shape.body.partial(),
});

export const createTeacherSchema = z.object({
  body: userInput.extend({
    employeeNo: z.string().min(1),
    dob: z.coerce.date().optional(),
    gender: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().optional(),
  }),
});

export const updateTeacherSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: createTeacherSchema.shape.body.partial(),
});

export const createParentSchema = z.object({
  body: userInput.extend({
    phone: z.string().optional(),
    address: z.string().optional(),
    occupation: z.string().optional(),
  }),
});

export const updateParentSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: createParentSchema.shape.body.partial(),
});

export const createClassSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    grade: z.number().int().positive(),
    section: z.string().optional(),
    academicYear: z.string().min(4),
  }),
});

export const updateClassSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: createClassSchema.shape.body.partial(),
});

export const assignIdsSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: z.object({ ids: z.array(z.number().int().positive()).min(1) }),
});

export const createSubjectSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    code: z.string().min(1),
    description: z.string().optional(),
    classId: z.number().int().positive().optional(),
    teacherId: z.number().int().positive().optional(),
  }),
});

export const updateSubjectSchema = z.object({
  params: z.object({ id: z.coerce.number().int().positive() }),
  body: createSubjectSchema.shape.body.partial(),
});
