import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 5000,

    database: {
        host: process.env.DB_HOST || '127.0.0.1',
        name: process.env.DB_NAME || 'test1',
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
    },
};

// console.log(config);

export default config;
