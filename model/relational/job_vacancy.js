const { DataTypes } = require('sequelize')
const db = require('../../config/relational_db')

module.exports = (sequelize, DataTypes) => {
    const Job_Vacancy = sequelize.define('Job_Vacancy', {
        id_vacancy: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        place: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_company: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'job_vacancy',
        timestamps: false
    });

    Job_Vacancy.associate = (models) => {
        Job_Vacancy.belongsTo(models.Company, {
            foreignKey: 'id_company',
        })
        Job_Vacancy.belongsToMany(models.Applicant, {
            through: 'applicant_job_vacancy',
            foreignKey: 'id_vacancy',
            otherKey: 'id_applicant'
        })
    }

    return Job_Vacancy
}
