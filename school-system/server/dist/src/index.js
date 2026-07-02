import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import academicRoutes from "./routes/academic.routes.js";
import authRoutes from "./routes/auth.routes.js";
import operationsRoutes from "./routes/operations.routes.js";
import personRoutes from "./routes/person.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";
const app = express();
app.use(helmet());
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 300 }));
app.get("/api", (req, res) => {
    res.json({ success: true, message: "School system API is running" });
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/user", userRoutes);
app.use("/api", personRoutes);
app.use("/api", academicRoutes);
app.use("/api", operationsRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(env.port, () => {
    console.log(`server is running on http://localhost:${env.port}`);
});
//# sourceMappingURL=index.js.map