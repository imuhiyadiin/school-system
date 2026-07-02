import { Router } from "express";
import { parentController } from "../controllers/parent.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { idParamSchema } from "../validations/common.validation.js";
import { createParentSchema, updateParentSchema } from "../validations/school.validation.js";
const router = Router();
const adminOnly = authorize("ADMIN");
router.use(authenticate);
router.get("/", adminOnly, parentController.list);
router.post("/", adminOnly, validate(createParentSchema), parentController.create);
router.get("/:id", adminOnly, validate(idParamSchema), parentController.get);
router.patch("/:id", adminOnly, validate(updateParentSchema), parentController.update);
router.delete("/:id", adminOnly, validate(idParamSchema), parentController.delete);
export default router;
//# sourceMappingURL=parent.routes.js.map