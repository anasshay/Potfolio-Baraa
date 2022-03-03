const { Schema, model } = require('mongoose');

const SocialmediaSchema = new Schema({
    imageLink: {
        type: String,
        required: true
    }, 
    link: {
        type: String,
        required: true
    }, 

}, {collection : 'Social-media'})//mongodb name

const SocialMedia = model('SocialMedia', SocialmediaSchema);
module.exports = SocialMedia; 

