const mongoose = require('mongoose')

const curriculum = mongoose.Schema({
    applicant_name: { type: String, required: true },
    about: { type: String, required: true },
    birthday: { type: String, required: true },
    phones: [{ type: String, required: true }],
    emails: [{ type: String, required: true }],
    experiences: [{ type: String, required: true }],
    scholarity: { type: String, required: true },
    school: { type: String, required: true },
    courses: [{ type: String, required: true }],
    references: [{ type: String, required: true }],
    soft_skills: [{ type: String, required: true }],
    hard_skills: [{ type: String, required: true }],
    extra_links: [{ type: String, required: true }],
    user: { type: String, required: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model('Curriculum', curriculum)