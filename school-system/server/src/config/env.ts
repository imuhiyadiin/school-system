import "dotenv/config";

const required = (key: string, fallback?: string) => {
  const value = process.env[key] ?? fallback;
  if (!value) {
    throw new Error(`${key} is required`);
  }
  return value;
};

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT) || 7000,
  databaseUrl: required("DATABASE_URL"),
  jwtAccessSecret: required("JWT_ACCESS_SECRET", process.env.SECRET_KEY),
  jwtRefreshSecret: required("JWT_REFRESH_SECRET", process.env.SECRET_KEY),
  accessTokenExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? "15m",
  refreshTokenExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? "7d",
  corsOrigin: process.env.CORS_ORIGIN ?? "*",
};
