const express = require('express');
const { loginUser, authUser } = require('../controllers/UserController');
const AuthUser = require('../middlewares/AuthUser');

const userRoutes = express.Router();

userRoutes.route('/login').post(loginUser);
userRoutes.route('/auth').post(AuthUser, authUser);

module.exports = userRoutes;