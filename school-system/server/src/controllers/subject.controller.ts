import { subjectService } from "../services/academic.service.js";
import { requireAdmin } from "./admin.guard.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";

export const subjectController = {
  create: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await subjectService.create(req.body), "Subject created", 201);
  }),

  update: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await subjectService.update(Number(req.params.id), req.body), "Subject updated");
  }),

  delete: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await subjectService.delete(Number(req.params.id)), "Subject deleted");
  }),

  get: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await subjectService.get(Number(req.params.id)), "Subject fetched");
  }),

  list: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(res, await subjectService.list(), "Subjects fetched");
  }),

  assignTeacher: asyncHandler(async (req, res) => {
    requireAdmin(req);
    return sendSuccess(
      res,
      await subjectService.assignTeacher(Number(req.params.id), req.body.ids[0]),
      "Teacher assigned",
    );
  }),
};
