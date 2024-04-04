import { DataTypes, Model } from 'sequelize';
import db from '../config/seqeulize';

interface IIuser {
    id: string;
    name: string;
    email: string;
    password: string;
}

class User extends Model implements IIuser {
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        freezeTableName: true,
        tableName: 'users',
    }
);

export default User;
