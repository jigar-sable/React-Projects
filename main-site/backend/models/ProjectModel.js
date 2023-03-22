const mongoose = require('mongoose');
const User = require('./UserModel');

// project schema
const projectSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    name: {
        type: String,
        required: true,
    },
    view: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    preview: {
        type: String,
        required: true,
    },
});

// project model
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;