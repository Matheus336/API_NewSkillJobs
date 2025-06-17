const { DataTypes } = require('sequelize')
const db = require('../../config/relational_db')

module.exports = (sequelize, DataTypes) => {
    const Contacts = sequelize.define('Contacts', {
        id_contact: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type_contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_company: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: 'contacts',
        timestamps: false
    })

    Contacts.associate = (models) => {
        Contacts.belongsTo(models.Company, {
            foreignKey: 'id_company'
        })
    }

    return Contacts
}
