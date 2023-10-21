const {DataTypes}= require ('sequelize');

const db= require('../database/database');

const UsersItsa = db.define('usersItsa',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            len: [7, 255]
        }
    }
})

module.exports = UsersItsa