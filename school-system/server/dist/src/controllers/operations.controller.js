import { dashboardService } from "../services/dashboard.service.js";
import { requireAdmin } from "./admin.guard.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/apiResponse.js";
export { attendanceController } from "./attendance.controller.js";
export { examController } from "./exam.controller.js";
export { feeController } from "./fee.controller.js";
export { resultController } from "./result.controller.js";
export const dashboardController = {
    summary: asyncHandler(async (req, res) => {
        requireAdmin(req);
        return sendSuccess(res, await dashboardService.summary(), "Dashboard summary");
    }),
};
//# sourceMappingURL=operations.controller.js.map