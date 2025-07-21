const db = require('../config/relational_db');

module.exports = {
    async postCreate(req, res) {
        try {
            const company = await db.Company.create(req.body);
            res.status(201).json(company); 
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getList(req, res) {
        try {
            const companies = await db.Company.findAll();
            res.status(200).json(companies); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getCompany(req, res) {
        try {
            const company = await db.Company.findByPk(req.params.id);
            if (company) {
                res.status(200).json(company); 
            } else {
                res.status(404).json({ message: 'Company não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async putCompany(req, res) {
        try {
            const company = await db.Company.findByPk(req.params.id);
            if (company) {
                await company.update(req.body);
                res.status(200).json(company); 
            } else {
                res.status(404).json({ message: 'Company não encontrada' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteCompany(req, res) {
        try {
            const company = await db.Company.findByPk(req.params.id);
            if (company) {
                await company.destroy();
                res.status(204).send(); 
            } else {
                res.status(404).json({ message: 'Company não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
