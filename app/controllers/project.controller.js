const db = require("../models");
const Project = db.project;
const Op = db.Sequelize.Op;

// Create and Save a new Project
exports.create = (req, res) => {
    console.log("Create project controller");

    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create a Project
    const project = {
        title: req.body.title,
        description: req.body.description,
        technologies: req.body.technologies,
    };

    // Save Project in the database
    Project.create(project)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Project.",
            });
        });
};

// Retrieve all Projects from the database
exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Project.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving projects.",
            });
        });
};

// Retrieve all Projects for a User (if needed, adjust userId handling in your model/database)
exports.findAllForUser = (req, res) => {
    const userId = req.params.userId;

    Project.findAll({ where: { userId: userId } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving projects.",
            });
        });
};

// Find a single Project by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Project.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Project with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Project with id=" + id,
            });
        });
};

// Update a Project by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Project.update(req.body, { where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Project was updated successfully." });
            } else {
                res.send({
                    message: `Cannot update Project with id=${id}. Maybe Project was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Project with id=" + id,
            });
        });
};

// Delete a Project with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;

    Project.destroy({ where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Project was deleted successfully!" });
            } else {
                res.send({
                    message: `Cannot delete Project with id=${id}. Maybe Project was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Project with id=" + id,
            });
        });
};

// Delete all Projects from the database
exports.deleteAll = (req, res) => {
    Project.destroy({ where: {}, truncate: false })
        .then((nums) => {
            res.send({ message: `${nums} Projects were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all projects.",
            });
        });
};
