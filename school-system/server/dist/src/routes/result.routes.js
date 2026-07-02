import { Router } from "express";
import { resultController } from "../controllers/result.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.js";
import { idParamSchema } from "../validations/common.validation.js";
import { classResultQuerySchema, rankingQuerySchema } from "../validations/operations.validation.js";
const router = Router();
const adminOnly = authorize("ADMIN");
router.use(authenticate);
router.get("/students/:id", adminOnly, validate(idParamSchema), resultController.studentResults);
router.get("/classes/:id", adminOnly, validate(classResultQuerySchema), resultController.classResults);
router.get("/classes/:id/ranking", adminOnly, validate(rankingQuerySchema), resultController.ranking);
export default router;
//# sourceMappingURL=result.routes.js.map