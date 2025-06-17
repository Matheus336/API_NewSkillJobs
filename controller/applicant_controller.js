const db = require('../config/relational_db');

module.exports = {
    async postCreate(req, res) {
        try {
            const applicant = await db.Applicant.create(req.body);
            res.status(201).json(applicant); // Retorna o objeto criado
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getList(req, res) {
        try {
            const applicants = await db.Applicant.findAll();
            res.status(200).json(applicants); // Retorna a lista de applicants
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getApplicant(req, res) {
        try {
            const applicant = await db.Applicant.findByPk(req.params.id);
            if (applicant) {
                res.status(200).json(applicant); // Retorna o applicant específico
            } else {
                res.status(404).json({ message: 'Applicant não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async putApplicant(req, res) {
        try {
            const applicant = await db.Applicant.findByPk(req.params.id);
            if (applicant) {
                await applicant.update(req.body);
                res.status(200).json(applicant); // Retorna o applicant atualizado
            } else {
                res.status(404).json({ message: 'Applicant não encontrado' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteApplicant(req, res) {
        try {
            const applicant = await db.Applicant.findByPk(req.params.id);
            if (applicant) {
                await applicant.destroy();
                res.status(204).send(); // Retorno vazio indicando sucesso
            } else {
                res.status(404).json({ message: 'Applicant não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
