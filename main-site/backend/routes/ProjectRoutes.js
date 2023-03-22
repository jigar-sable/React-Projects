const express = require('express');
const {
    getProjects,
    getProjectById,
    addProject,
    deleteProject,
    updateProject
} = require('../controllers/ProjectController');

const AuthUser = require('../middlewares/AuthUser');

const projectRoutes = express.Router();

projectRoutes.route('/projects').get(getProjects);
projectRoutes.route('/addproject').post(AuthUser, addProject);
projectRoutes.route('/project/:id').get(getProjectById).put(AuthUser, updateProject).delete(AuthUser, deleteProject);

module.exports = projectRoutes;