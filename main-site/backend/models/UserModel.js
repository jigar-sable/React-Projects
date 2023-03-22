const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    }
});

// user model
const User = mongoose.model('User', userSchema);

module.exports = User;