import * as dotenv from 'dotenv';

dotenv.config({ path: process.cwd() + '\\.env' }); 

export default () => ({
    port: parseInt(process.env.PORT, 10) || 4200,
    database: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5433,
      name: process.env.DB_NAME,
      user: process.env.DB_USER
    },
    app: {
        key: process.env.APP_KEYS
    }
  });
  