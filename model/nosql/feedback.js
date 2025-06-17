const mongoose = require('mongoose')

const feedback = mongoose.Schema({
    id_job_application: { type: Number, required: true },
    appraiser: { type: String, required: true },
    description: { type: String, required: true },
})

module.exports = mongoose.model('Feedback', feedback)