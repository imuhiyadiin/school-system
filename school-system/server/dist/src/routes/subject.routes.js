import { Router } from "express";
import { subjectController } from "../controllers/subject.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { idParamSchema } from "../validations/common.validation.js";
import { assignIdsSchema, createSubjectSchema, updateSubjectSchema } from "../validations/school.validation.js";
const router = Router();
const adminOnly = authorize("ADMIN");
router.use(authenticate);
router.get("/", adminOnly, subjectController.list);
router.post("/", adminOnly, validate(createSubjectSchema), subjectController.create);
router.get("/:id", adminOnly, validate(idParamSchema), subjectController.get);
router.patch("/:id", adminOnly, validate(updateSubjectSchema), subjectController.update);
router.delete("/:id", adminOnly, validate(idParamSchema), subjectController.delete);
router.post("/:id/teachers", adminOnly, validate(assignIdsSchema), subjectController.assignTeacher);
export default router;
//# sourceMappingURL=subject.routes.js.map