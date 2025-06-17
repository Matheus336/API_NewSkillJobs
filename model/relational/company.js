const { DataTypes } = require('sequelize')
const db = require('../../config/relational_db')

module.exports = ( sequelize , DataTypes ) => {
    const Company = sequelize.define('Company', {
        id_company: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false
        },
        about:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        neighborhood: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coordinate: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'company',
        timestamps: false
    })
    Company.associate = (models) => {
        Company.hasMany(models.Contacts, {
            foreignKey: 'id_company'
        })
    }
    Company.associate = (models) => {
        Company.hasMany(models.Job_Vacancy, {
            foreignKey: 'id_company'
        })
    }
    return Company
}