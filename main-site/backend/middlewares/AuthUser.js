const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwt_secret = process.env.JWT_TOKEN_SECRET;

const AuthUser = (req, res, next) => {
    const token = req.body.token
    if (!token) {
        return res.json({ message: "Invalid Token", token: false })
    }
    try {
        const data = jwt.verify(token, jwt_secret)
        req.id = data.id
        next()
    } catch (error) {
        res.send(error)
    }
}
module.exports = AuthUser;