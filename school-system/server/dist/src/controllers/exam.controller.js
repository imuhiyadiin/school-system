import { examService } from "../services/exam.service.js";
import { requireAdmin } from "./admin.guard.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";
export const examController = {
    create: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await examService.create(req.body), "Exam created", 201);
    }),
    schedule: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await examService.schedule(Number(req.params.id), req.body), "Exam scheduled");
    }),
    assignSubjects: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await examService.assignSubjects(Number(req.params.id), req.body.subjects), "Subjects assigned");
    }),
    enterMarks: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await examService.enterMarks(req.body), "Marks entered");
    }),
    updateMarks: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await examService.updateMarks(req.body), "Marks updated");
    }),
    publishResults: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await examService.publishResults(Number(req.params.id)), "Results published");
    }),
};
//# sourceMappingURL=exam.controller.js.map