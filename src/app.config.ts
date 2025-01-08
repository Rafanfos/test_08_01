import { registerAs } from '@nestjs/config';

const dbConfig = registerAs('dbConfig', () => ({
  dbConfig: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.DB_SYNCHRONIZE,
    logging: process.env.DB_LOGGING,
  },
}));

const jwtConfig = registerAs('jwt', () => {
  return {
    secret: process.env.JWT_SECRET,
    jwtTtl: Number(process.env.JWT_TTL ?? '3600'),
    jwtRefreshTtl: Number(process.env.JWT_REFRESH_TTL ?? '86400'),
  };
});

export { jwtConfig, dbConfig };
