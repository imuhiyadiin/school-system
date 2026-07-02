import { Router } from "express";
import { studentController } from "../controllers/person.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { idParamSchema, paginationQuerySchema } from "../validations/common.validation.js";
import { createStudentSchema, updateStudentSchema } from "../validations/school.validation.js";

const router = Router();
const adminOnly = authorize("ADMIN");

router.use(authenticate);

router.get("/", adminOnly, validate(paginationQuerySchema), studentController.list);
router.post("/", adminOnly, validate(createStudentSchema), studentController.create);
router.get("/:id", adminOnly, validate(idParamSchema), studentController.get);
router.patch("/:id", adminOnly, validate(updateStudentSchema), studentController.update);
router.delete("/:id", adminOnly, validate(idParamSchema), studentController.delete);

export default router;
