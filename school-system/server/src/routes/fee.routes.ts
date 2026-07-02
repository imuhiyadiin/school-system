import { Router } from "express";
import { feeController } from "../controllers/fee.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { studentIdParamSchema } from "../validations/common.validation.js";
import {
  attendanceMonthlyQuerySchema,
  createFeeStructureSchema,
  recordPaymentSchema,
} from "../validations/operations.validation.js";

const router = Router();
const adminOnly = authorize("ADMIN");

router.use(authenticate);

router.post("/structures", adminOnly, validate(createFeeStructureSchema), feeController.createStructure);
router.post("/payments", adminOnly, validate(recordPaymentSchema), feeController.recordPayment);
router.get("/payments/:studentId", adminOnly, validate(studentIdParamSchema), feeController.paymentHistory);
router.get("/outstanding/:studentId", adminOnly, validate(studentIdParamSchema), feeController.outstanding);
router.get("/reports/monthly", adminOnly, validate(attendanceMonthlyQuerySchema), feeController.monthlyReport);

export default router;
