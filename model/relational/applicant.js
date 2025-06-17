const { DataTypes } = require('sequelize')
const db = require('../../config/relational_db')

module.exports = (sequelize, DataTypes) => {
    const Applicant = sequelize.define('Applicant', {
        id_applicant: {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cellphone: {
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
        skills: {
            type: DataTypes.STRING
        },
        link_curriculum: {
            /*  linkedin
            */
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'applicant',
        timestamps: false
    })

    Applicant.associate = (models) => {
        Applicant.belongsToMany(models.Job_Vacancy, {
            through: 'applicant_job_vacancy',
            foreignKey: 'id_applicant',
            otherKey: 'id_vacancy'
        })
    }

    return Applicant
}
