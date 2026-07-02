import { Router } from "express";
import { examController } from "../controllers/exam.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { idParamSchema } from "../validations/common.validation.js";
import { assignExamSubjectsSchema, createExamSchema, marksSchema, scheduleExamSchema, } from "../validations/operations.validation.js";
const router = Router();
const adminOnly = authorize("ADMIN");
router.use(authenticate);
router.post("/", adminOnly, validate(createExamSchema), examController.create);
router.patch("/:id/schedule", adminOnly, validate(scheduleExamSchema), examController.schedule);
router.post("/:id/subjects", adminOnly, validate(assignExamSubjectsSchema), examController.assignSubjects);
router.post("/marks", adminOnly, validate(marksSchema), examController.enterMarks);
router.patch("/marks", adminOnly, validate(marksSchema), examController.updateMarks);
router.patch("/:id/publish", adminOnly, validate(idParamSchema), examController.publishResults);
export default router;
//# sourceMappingURL=exam.routes.js.map