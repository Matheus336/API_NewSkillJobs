const Feedback = require('../../model/nosql/feedback');
const mongoose = require("mongoose");
const StringCon = require('../../config/nosql_db')

mongoose.connect(StringCon.connection).then(() => {
    console.log('Conectado com o BD')
}).catch(() => {
    console.log('Erro na conexao com o BD')
})

module.exports = {
    async getList(req, res) {
        try {
            const feedbacks = await Feedback.find();
            res.status(200).json(feedbacks);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getFeedback(req, res) {
        try {
            const feedback = await Feedback.findById(req.params.id);
            if (feedback) {
                res.status(200).json(feedback);
            } else {
                res.status(404).json({ message: 'Feedback não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async postCreate(req, res) {
        try {
            const feedback = await Feedback.create(req.body);
            res.status(201).json(feedback);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async putFeedback(req, res) {
        try {
            const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (updatedFeedback) {
                res.status(200).json(updatedFeedback);
            } else {
                res.status(404).json({ message: 'Feedback não encontrado' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteFeedback(req, res) {
        try {
            const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
            if (deletedFeedback) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Feedback não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
