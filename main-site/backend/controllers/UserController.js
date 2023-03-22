const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwt_secret = process.env.JWT_TOKEN_SECRET;

const loginUser = async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {

        const token = jwt.sign({ id: user._id }, jwt_secret)

        await User.findByIdAndUpdate(user._id, { $set: { token } }, {
            new: true,
            useValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            login: true,
            token
        })
    } else {
        res.json({
            login: false
        })
    }

}

const authUser = async (req, res) => {

    const id = req.id;
    const user = await User.findById(id);

    if (user) {
        res.status(200).json({
            status: "ok",
            auth: true,
        })
    } else {
        res.json({
            status: "error",
            auth: false,
        })
    }

}

module.exports = { loginUser, authUser };