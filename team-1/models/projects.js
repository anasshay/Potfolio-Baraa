const { Schema, model } = require('mongoose');

const ProjectsSchema = new Schema({
    imageLink: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link :{
        type :String,
        required: true
    },
    description: {
        type :String,
        required: true
    }
},{
    collection : 'Projects'
})

const Projects = model('Projects', ProjectsSchema);
module.exports = Projects
