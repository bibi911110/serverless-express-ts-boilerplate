import { Sequelize } from 'sequelize';
import config from './index';

const db = new Sequelize({
    username: config.database.user,
    password: config.database.password,
    database: config.database.name,
    host: config.database.host,
    port: config.database.port,
    dialect: 'mysql',
    pool: {
        min: 1,
        max: 2,
    },
    logging: false,
});

export default db;
