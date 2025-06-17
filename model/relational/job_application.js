const { DataTypes } = require('sequelize')
const db = require('../../config/relational_db')

module.exports = (sequelize, DataTypes) => {
    const Job_Application = sequelize.define('Job_Application', {
        id_job_application: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_applicant: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_vacancy: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        application_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        observations: {
            type: DataTypes.STRING,
            allowNull: true
        },
        interview_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        schedule_interview: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link_interview: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'job_application',
        timestamps: false
    })

    Job_Application.associate = (models) => {
        Job_Application.belongsTo(models.Applicant, {
            foreignKey: 'id_applicant',
        })
        Job_Application.belongsTo(models.Job_Vacancy, {
            foreignKey: 'id_vacancy',
        })
    }

    return Job_Application
}
