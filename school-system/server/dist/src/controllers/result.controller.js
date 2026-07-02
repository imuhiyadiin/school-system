import { resultService } from "../services/exam.service.js";
import { requireAdmin } from "./admin.guard.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";
export const resultController = {
    studentResults: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await resultService.studentResults(Number(req.params.id)), "Student results");
    }),
    classResults: asyncHandler(async (req, res) => {
        requireAdmin(req);
        const examId = req.query.examId ? Number(req.query.examId) : undefined;
        return sendSuccess(res, await resultService.classResults(Number(req.params.id), examId), "Class results");
    }),
    ranking: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await resultService.ranking(Number(req.params.id), Number(req.query.examId)), "Class ranking");
    }),
};
//# sourceMappingURL=result.controller.js.map