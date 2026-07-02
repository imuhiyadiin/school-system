import { Router } from "express";
import classRoutes from "./class.routes.js";
import subjectRoutes from "./subject.routes.js";
const router = Router();
router.use("/classes", classRoutes);
router.use("/subjects", subjectRoutes);
export default router;
//# sourceMappingURL=academic.routes.js.map