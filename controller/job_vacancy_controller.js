const db = require('../config/relational_db');

module.exports = {
    async postCreate(req, res) {
        try {
            const jobVacancy = await db.Job_Vacancy.create(req.body);
            res.status(201).json(jobVacancy); // Retorna o objeto criado
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getList(req, res) {
        try {
            const jobVacancies = await db.Job_Vacancy.findAll();
            res.status(200).json(jobVacancies); // Retorna a lista de vagas de emprego
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getJobVacancy(req, res) {
        try {
            const jobVacancy = await db.Job_Vacancy.findByPk(req.params.id);
            if (jobVacancy) {
                res.status(200).json(jobVacancy); // Retorna a vaga específica
            } else {
                res.status(404).json({ message: 'Job Vacancy não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async putJobVacancy(req, res) {
        try {
            const jobVacancy = await db.Job_Vacancy.findByPk(req.params.id);
            if (jobVacancy) {
                await jobVacancy.update(req.body);
                res.status(200).json(jobVacancy); // Retorna a vaga atualizada
            } else {
                res.status(404).json({ message: 'Job Vacancy não encontrada' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteJobVacancy(req, res) {
        try {
            const jobVacancy = await db.Job_Vacancy.findByPk(req.params.id);
            if (jobVacancy) {
                await jobVacancy.destroy();
                res.status(204).send(); // Retorno vazio indicando sucesso
            } else {
                res.status(404).json({ message: 'Job Vacancy não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
