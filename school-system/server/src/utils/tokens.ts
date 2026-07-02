import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import type { SignOptions } from "jsonwebtoken";
import { env } from "../config/env.js";

type JwtPayload = {
  id: number;
  email: string;
  role: string;
};

const accessTokenOptions = (): SignOptions => ({
  expiresIn: env.accessTokenExpiresIn as NonNullable<SignOptions["expiresIn"]>,
});

const refreshTokenOptions = (): SignOptions => ({
  expiresIn: env.refreshTokenExpiresIn as NonNullable<SignOptions["expiresIn"]>,
});

export const signAccessToken = (payload: JwtPayload) =>
  jwt.sign(payload, env.jwtAccessSecret, accessTokenOptions());

export const signRefreshToken = (payload: JwtPayload) =>
  jwt.sign(payload, env.jwtRefreshSecret, refreshTokenOptions());

export const verifyAccessToken = (token: string) => jwt.verify(token, env.jwtAccessSecret) as JwtPayload;

export const verifyRefreshToken = (token: string) => jwt.verify(token, env.jwtRefreshSecret) as JwtPayload;

export const sha256 = (value: string) => crypto.createHash("sha256").update(value).digest("hex");

export const randomToken = () => crypto.randomBytes(32).toString("hex");
