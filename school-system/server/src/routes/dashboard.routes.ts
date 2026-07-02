import { Router } from "express";
import { dashboardController } from "../controllers/operations.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(authenticate);
router.get("/summary", authorize("ADMIN"), dashboardController.summary);

export default router;
