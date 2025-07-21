const db = require('../config/relational_db');

module.exports = {
    async postCreate(req, res) {
        try {
            const contact = await db.Contacts.create(req.body);
            res.status(201).json(contact); 
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getList(req, res) {
        try {
            const contacts = await db.Contacts.findAll();
            res.status(200).json(contacts); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getContact(req, res) {
        try {
            const contact = await db.Contacts.findByPk(req.params.id);
            if (contact) {
                res.status(200).json(contact); 
            } else {
                res.status(404).json({ message: 'Contato não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async putContact(req, res) {
        try {
            const contact = await db.Contacts.findByPk(req.params.id);
            if (contact) {
                await contact.update(req.body);
                res.status(200).json(contact); 
            } else {
                res.status(404).json({ message: 'Contato não encontrado' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteContact(req, res) {
        try {
            const contact = await db.Contacts.findByPk(req.params.id);
            if (contact) {
                await contact.destroy();
                res.status(204).send(); 
            } else {
                res.status(404).json({ message: 'Contato não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
