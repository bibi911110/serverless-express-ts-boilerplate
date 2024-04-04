import { Sequelize } from 'sequelize';
import * as mysql2 from 'mysql2';
import config from './index';

const db = new Sequelize({
    username: config.database.user,
    password: config.database.password,
    database: config.database.name,
    host: config.database.host,
    port: config.database.port,
    dialect: 'mysql',
    dialectModule: mysql2,
    pool: {
        min: 1,
        max: 2,
    },
    logging: false,
});

export default db;
