const db = require('../config/relational_db');

module.exports = {
    async postCreate(req, res) {
        try {
            const jobApplication = await db.Job_Application.create(req.body);
            res.status(201).json(jobApplication); 
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getList(req, res) {
        try {
            const jobApplications = await db.Job_Application.findAll();
            res.status(200).json(jobApplications); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getJobApplication(req, res) {
        try {
            const jobApplication = await db.Job_Application.findByPk(req.params.id);
            if (jobApplication) {
                res.status(200).json(jobApplication); 
            } else {
                res.status(404).json({ message: 'Job Application não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async putJobApplication(req, res) {
        try {
            const jobApplication = await db.Job_Application.findByPk(req.params.id);
            if (jobApplication) {
                await jobApplication.update(req.body);
                res.status(200).json(jobApplication);
            } else {
                res.status(404).json({ message: 'Job Application não encontrada' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteJobApplication(req, res) {
        try {
            const jobApplication = await db.Job_Application.findByPk(req.params.id);
            if (jobApplication) {
                await jobApplication.destroy();
                res.status(204).send(); 
            } else {
                res.status(404).json({ message: 'Job Application não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
