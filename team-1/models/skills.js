const { Schema, model } = require('mongoose');

const SkillsScehma = new Schema({
    title: {
        type: String,
        required: true
    },
    imagelink: {
        type: String,
        required: true
    }
}, {
    collection: 'Skills'
})

const Skills = model('Skills', SkillsScehma);
module.exports = Skills;