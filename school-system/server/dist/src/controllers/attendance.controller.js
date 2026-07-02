import { attendanceService } from "../services/attendance.service.js";
import { requireAdmin } from "./admin.guard.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";
export const attendanceController = {
    mark: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await attendanceService.mark(req.body), "Attendance marked");
    }),
    daily: asyncHandler(async (req, res) => {
        requireAdmin(req);
        const date = req.query.date ? new Date(req.query.date) : new Date();
        return sendSuccess(res, await attendanceService.dailyReport(date), "Daily attendance");
    }),
    monthly: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await attendanceService.monthlyReport(Number(req.query.month), Number(req.query.year)), "Monthly attendance");
    }),
    history: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await attendanceService.studentHistory(Number(req.query.studentId)), "Student attendance history");
    }),
};
//# sourceMappingURL=attendance.controller.js.map