import { registerAs } from '@nestjs/config';

export default registerAs('dbConfig', () => ({
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
