import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
const accessTokenOptions = () => ({
    expiresIn: env.accessTokenExpiresIn,
});
const refreshTokenOptions = () => ({
    expiresIn: env.refreshTokenExpiresIn,
});
export const signAccessToken = (payload) => jwt.sign(payload, env.jwtAccessSecret, accessTokenOptions());
export const signRefreshToken = (payload) => jwt.sign(payload, env.jwtRefreshSecret, refreshTokenOptions());
export const verifyAccessToken = (token) => jwt.verify(token, env.jwtAccessSecret);
export const verifyRefreshToken = (token) => jwt.verify(token, env.jwtRefreshSecret);
export const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
export const randomToken = () => crypto.randomBytes(32).toString("hex");
//# sourceMappingURL=tokens.js.map