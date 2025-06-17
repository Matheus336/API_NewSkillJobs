const Curriculum = require('../../model/nosql/curriculum');
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
            const curricula = await Curriculum.find();
            res.status(200).json(curricula);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getCurriculum(req, res) {
        try {
            const curriculum = await Curriculum.findById(req.params.id);
            if (curriculum) {
                res.status(200).json(curriculum);
            } else {
                res.status(404).json({ message: 'Curriculum não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async postCreate(req, res) {
        try {
            const curriculum = await Curriculum.create(req.body);
            res.status(201).json(curriculum);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async putCurriculum(req, res) {
        try {
            const updatedCurriculum = await Curriculum.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (updatedCurriculum) {
                res.status(200).json(updatedCurriculum);
            } else {
                res.status(404).json({ message: 'Curriculum não encontrado' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteCurriculum(req, res) {
        try {
            const deletedCurriculum = await Curriculum.findByIdAndDelete(req.params.id);
            if (deletedCurriculum) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Curriculum não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
