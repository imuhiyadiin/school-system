import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { idParamSchema, paginationQuerySchema } from "../validations/common.validation.js";
import {
  createUserSchema,
  setUserActiveSchema,
  updateUserRoleSchema,
  updateUserSchema,
} from "../validations/user.validation.js";

const router = Router();
const adminOnly = authorize("ADMIN");

router.use(authenticate);

router.get("/me", userController.me);
router.get("/", adminOnly, validate(paginationQuerySchema), userController.list);
router.post("/", adminOnly, validate(createUserSchema), userController.create);
router.get("/:id", adminOnly, validate(idParamSchema), userController.get);
router.patch("/:id", adminOnly, validate(updateUserSchema), userController.update);
router.patch("/:id/role", adminOnly, validate(updateUserRoleSchema), userController.changeRole);
router.patch("/:id/status", adminOnly, validate(setUserActiveSchema), userController.setActive);
router.delete("/:id", adminOnly, validate(idParamSchema), userController.delete);

export default router;
