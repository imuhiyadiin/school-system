import { Router } from "express";
import { teacherController } from "../controllers/teacher.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { idParamSchema } from "../validations/common.validation.js";
import { createTeacherSchema, updateTeacherSchema } from "../validations/school.validation.js";

const router = Router();
const adminOnly = authorize("ADMIN");

router.use(authenticate);

router.get("/", adminOnly, teacherController.list);
router.post("/", adminOnly, validate(createTeacherSchema), teacherController.create);
router.get("/:id", adminOnly, validate(idParamSchema), teacherController.get);
router.patch("/:id", adminOnly, validate(updateTeacherSchema), teacherController.update);
router.delete("/:id", adminOnly, validate(idParamSchema), teacherController.delete);

export default router;
