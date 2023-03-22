const Project = require('../models/ProjectModel');

const getProjects = async (req, res) => {

    const projects = await Project.find();

    if (projects) {
        res.status(200).json({
            projects
        })
    } else {
        res.status(400).json({
            status: "error",
        })
    }

}

const getProjectById = async (req, res) => {

    let project = await Project.findById(req.params.id);

    if (project) {
        res.status(200).json({
            status: "success",
            project
        })
    } else {
        res.status(401).json({
            status: "error",
        })
    }

}


const addProject = async (req, res) => {

    const { name, view, code, imgURL } = req.body;

    const project = await Project.create({
        name,
        view,
        code,
        preview: imgURL,
        user: req.id
    });

    if (project) {
        res.status(201).json({
            status: "ok",
            added: true
        })
    } else {
        res.status(400).json({
            status: "error",
            added: false
        })
    }

}

const deleteProject = async (req, res) => {

    let project = await Project.findById(req.params.id);

    if (project) {
        if (project.user.toString() !== req.id) {
            return res.json({ message: 'Permission Denied' })
        } else {
            await Project.findByIdAndDelete(req.params.id);
            res.status(200).json({
                status: "success",
                deleted: true
            })
        }
    } else {
        res.json({
            status: "error",
        })
    }

}

const updateProject = async (req, res) => {

    let project = await Project.findById(req.params.id);

    if (project) {

        if (project.user.toString() !== req.id) {
            return res.json({ message: 'Permission Denied' })
        } else {
            const { name, view, code, imgURL } = req.body;

            project = await Project.findByIdAndUpdate(req.params.id, {
                $set: {
                    name,
                    view,
                    code,
                    preview: imgURL,
                    user: req.id
                }
            }, {
                new: false,
                useValidators: true,
                useFindAndModify: false
            })
            res.status(201).json({
                status: "success",
                updated: true,
                project
            })
        }
    } else {
        res.status(401).json({
            status: "error",
        })
    }

}

module.exports = { getProjects, getProjectById, addProject, deleteProject, updateProject }
