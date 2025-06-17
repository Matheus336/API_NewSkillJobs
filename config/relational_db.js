const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize ('NewSkillJobs', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
})

var db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.Company = require ('../model/relational/company')(sequelize, DataTypes)
db.Applicant = require ('../model/relational/applicant')(sequelize, DataTypes)
db.Contacts = require ('../model/relational/contacts')(sequelize, DataTypes)
db.Job_Application = require ('../model/relational/job_application')(sequelize, DataTypes)
db.Job_Vacancy = require ('../model/relational/job_vacancy')(sequelize, DataTypes)

module.exports = db
