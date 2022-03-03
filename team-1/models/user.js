const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    aboutMe: {
        type: Schema.Types.ObjectId,
        ref: 'About_Me'
    },
    skills: {
        type: Schema.Types.ObjectId,
        ref: 'Skills'
    },
    experiences: {
        type: Schema.Types.ObjectId,
        ref: 'Experience'
    },
    projects: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    },
    socialMedia: {
        type: Schema.Types.ObjectId,
        ref: 'SocialMedia'
    }
}, { collection: 'User' })

UserSchema.pre(['find', 'findOne'], function () {
    this.populate(['aboutMe' ,'skills', 'experiences' , 'projects' , 'socialMedia']);
});


const User = model('User', UserSchema);
module.exports = User; 