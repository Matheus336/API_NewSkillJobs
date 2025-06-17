const express = require('express');
const controllerApplicant = require('../../controller/applicant_controller');
const controllerCompany = require('../../controller/company_controller');
const controllerContacts = require('../../controller/contacts_controller');
const controllerJobApplication = require('../../controller/job_application_controller');
const controllerJobVacancy = require('../../controller/job_vacancy_controller');
const controllerCurriculum = require('../../controller/nosql/curriculum_controller');
const controllerFeedback = require('../../controller/nosql/feedback_controller');
const db = require('../../config/relational_db');

const route = express.Router();
/*
db.sequelize.sync({force: true})
    .then(() => console.log("✅ Tabela 'usuário' sincronizada com o banco de dados"))
    .catch(error => console.error("❌ Erro ao sincronizar tabela:", error))
*/
module.exports = route;

// Home
route.get('/home', (req, res) => res.render('home'));

// Rotas Applicant ok
route.post('/applicant', controllerApplicant.postCreate); //
route.get('/applicant', controllerApplicant.getList); //
route.get('/applicant/:id', controllerApplicant.getApplicant); //
route.put('/applicant/:id', controllerApplicant.putApplicant); //
route.delete('/applicantDelete/:id', controllerApplicant.deleteApplicant); //

// Rotas Company ok
route.post('/company', controllerCompany.postCreate); //
route.get('/company', controllerCompany.getList); //
route.get('/company/:id', controllerCompany.getCompany); //
route.put('/company/:id', controllerCompany.putCompany); //
route.delete('/companyDelete/:id', controllerCompany.deleteCompany); //

// Rotas Contact ok
route.get('/contact', controllerContacts.getList); //
route.post('/contact', controllerContacts.postCreate); //
route.get('/contact/:id', controllerContacts.getContact); //
route.put('/contact/:id', controllerContacts.putContact); //
route.delete('/contact/:id', controllerContacts.deleteContact); //

// Rotas Job_Application ok
route.get('/application', controllerJobApplication.getList); //
route.post('/application', controllerJobApplication.postCreate); //
route.get('/application/:id', controllerJobApplication.getJobApplication); //
route.put('/application/:id', controllerJobApplication.putJobApplication); //
route.delete('/application/:id', controllerJobApplication.deleteJobApplication); //

// Rotas para Job Vacancy ok
route.get('/jobVacancy', controllerJobVacancy.getList); //
route.post('/jobVacancy', controllerJobVacancy.postCreate); //
route.get('/jobVacancy/:id', controllerJobVacancy.getJobVacancy); //
route.put('/jobVacancy/:id', controllerJobVacancy.putJobVacancy); //
route.delete('/jobVacancy/:id', controllerJobVacancy.deleteJobVacancy); //

// Controller Curriculum ok
route.get('/curriculum', controllerCurriculum.getList); //
route.get('/curriculum/:id', controllerCurriculum.getCurriculum); //
route.post('/curriculum', controllerCurriculum.postCreate); //
route.put('/curriculum/:id', controllerCurriculum.putCurriculum); //
route.delete('/curriculum/:id', controllerCurriculum.deleteCurriculum); //

// Controller Feedback ok
route.get('/feedback', controllerFeedback.getList); //
route.get('/feedback/:id', controllerFeedback.getFeedback); //
route.post('/feedback', controllerFeedback.postCreate); //
route.put('/feedback/:id', controllerFeedback.putFeedback); //
route.delete('/feedback/:id', controllerFeedback.deleteFeedback); //