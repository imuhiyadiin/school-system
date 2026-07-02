import { teacherService } from "../services/person.service.js";
import { requireAdmin } from "./admin.guard.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";

export const teacherController = {
  create: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await teacherService.create(req.body), "Teacher created", 201);
  }),

  update: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await teacherService.update(Number(req.params.id), req.body), "Teacher updated");
  }),

  delete: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await teacherService.delete(Number(req.params.id)), "Teacher deleted");
  }),

  get: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await teacherService.get(Number(req.params.id)), "Teacher fetched");
  }),

  list: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await teacherService.list(), "Teachers fetched");
  }),
};
