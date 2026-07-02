import { classService } from "../services/academic.service.js";
import { requireAdmin } from "./admin.guard.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";

export const classController = {
  create: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await classService.create(req.body), "Class created", 201);
  }),

  update: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await classService.update(Number(req.params.id), req.body), "Class updated");
  }),

  delete: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await classService.delete(Number(req.params.id)), "Class deleted");
  }),

  get: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await classService.get(Number(req.params.id)), "Class fetched");
  }),

  list: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await classService.list(), "Classes fetched");
  }),

  assignStudents: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(
      res,
      await classService.assignStudents(Number(req.params.id), req.body.ids),
      "Students assigned",
    );
  }),

  assignTeachers: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(
      res,
      await classService.assignTeachers(Number(req.params.id), req.body.ids),
      "Teachers assigned",
    );
  }),
};
