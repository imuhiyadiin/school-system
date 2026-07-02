import { Router } from "express";
import parentRoutes from "./parent.routes.js";
import studentRoutes from "./student.routes.js";
import teacherRoutes from "./teacher.routes.js";

const router = Router();

router.use("/students", studentRoutes);
router.use("/teachers", teacherRoutes);
router.use("/parents", parentRoutes);

export default router;
