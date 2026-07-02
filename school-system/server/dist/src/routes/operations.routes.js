import { Router } from "express";
import attendanceRoutes from "./attendance.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import examRoutes from "./exam.routes.js";
import feeRoutes from "./fee.routes.js";
import resultRoutes from "./result.routes.js";
const router = Router();
router.use("/attendance", attendanceRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/exams", examRoutes);
router.use("/fees", feeRoutes);
router.use("/results", resultRoutes);
export default router;
//# sourceMappingURL=operations.routes.js.map