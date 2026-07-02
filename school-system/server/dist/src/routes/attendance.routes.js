import { Router } from "express";
import { attendanceController } from "../controllers/attendance.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { attendanceDateQuerySchema, attendanceMonthlyQuerySchema, attendanceStudentQuerySchema, markAttendanceSchema, } from "../validations/operations.validation.js";
const router = Router();
const adminOnly = authorize("ADMIN");
router.use(authenticate);
router.post("/", adminOnly, validate(markAttendanceSchema), attendanceController.mark);
router.get("/daily", adminOnly, validate(attendanceDateQuerySchema), attendanceController.daily);
router.get("/monthly", adminOnly, validate(attendanceMonthlyQuerySchema), attendanceController.monthly);
router.get("/history", adminOnly, validate(attendanceStudentQuerySchema), attendanceController.history);
export default router;
//# sourceMappingURL=attendance.routes.js.map