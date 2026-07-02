import { Router } from "express";
import { classController } from "../controllers/class.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { idParamSchema } from "../validations/common.validation.js";
import { assignIdsSchema, createClassSchema, updateClassSchema } from "../validations/school.validation.js";

const router = Router();
const adminOnly = authorize("ADMIN");

router.use(authenticate);

router.get("/", adminOnly, classController.list);
router.post("/", adminOnly, validate(createClassSchema), classController.create);
router.get("/:id", adminOnly, validate(idParamSchema), classController.get);
router.patch("/:id", adminOnly, validate(updateClassSchema), classController.update);
router.delete("/:id", adminOnly, validate(idParamSchema), classController.delete);
router.post("/:id/students", adminOnly, validate(assignIdsSchema), classController.assignStudents);
router.post("/:id/teachers", adminOnly, validate(assignIdsSchema), classController.assignTeachers);

export default router;
