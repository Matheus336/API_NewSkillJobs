const db = require('../config/relational_db');

module.exports = {
    async postCreate(req, res) {
        try {
            const contact = await db.Contacts.create(req.body);
            res.status(201).json(contact); // Retorna o objeto criado
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getList(req, res) {
        try {
            const contacts = await db.Contacts.findAll();
            res.status(200).json(contacts); // Retorna a lista de contatos
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getContact(req, res) {
        try {
            const contact = await db.Contacts.findByPk(req.params.id);
            if (contact) {
                res.status(200).json(contact); // Retorna o contato específico
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
                res.status(200).json(contact); // Retorna o contato atualizado
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
                res.status(204).send(); // Retorno vazio indicando sucesso
            } else {
                res.status(404).json({ message: 'Contato não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
