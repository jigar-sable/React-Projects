const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;

const connectDatabase = () => { 
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Mongoose Connected');
    }).catch((err) => console.log(err));
}

module.exports = connectDatabase;