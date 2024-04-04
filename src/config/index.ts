import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 5000,

    database: {
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME || 'test',
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
    },
};
