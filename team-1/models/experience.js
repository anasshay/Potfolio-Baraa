const { Schema, model } = require('mongoose');



const ExperienceSchema = new Schema({
    imageLink: {
        type: String,
        required: true
    }, 
    link: {
        type: String,
        required: true
    }, 
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    list_title: {
        type: String,
        required: true
    },
    dateFrom:{
        type: String,
        required: true
    },
    dateTo:{
        type: String,
        required: true
    },
    list_item: [{
        type: String,
    }],
},
{
    collection : 'Experience'
})

const Experience = model('Experience', ExperienceSchema)
module.exports = Experience