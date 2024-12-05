const db = require("../models");
const Education = db.education;
const Op = db.Sequelize.Op;

// Create and Save a new Education
exports.create = (req, res) => {

    console.log("add education controller");
    // Validate request
    if (!req.body.institution) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create an Education entry
    const education = {
        userId: req.params.userId,
        institution: req.body.institution,
        major: req.body.major,
        degree_type: req.body.degree_type,
        gpa: req.body.gpa,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        description: req.body.description,
    };

    // Save Education in the database
    Education.create(education)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while creating the Education.",
            });
        });
};

// Retrieve all Educations from the database
exports.findAll = (req, res) => {
    const institution = req.query.institution;
    var condition = institution
        ? { institution: { [Op.like]: `%${institution}%` } }
        : null;

    Education.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving educations.",
            });
        });
};

// Retrieve all Educations for a User
exports.findAllForUser = (req, res) => {
    const userId = req.params.userId;

    Education.findAll({ where: { userId: userId } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving educations.",
            });
        });
};

// Find a single Education by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Education.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Education with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Education with id=" + id,
            });
        });
};

// Update an Education by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Education.update(req.body, { where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Education was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Education with id=${id}. Maybe Education was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Education with id=" + id,
            });
        });
};

// Delete an Education with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;

    Education.destroy({ where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Education was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Education with id=${id}. Maybe Education was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Education with id=" + id,
            });
        });
};

// Delete all Educations from the database
exports.deleteAll = (req, res) => {
    Education.destroy({ where: {}, truncate: false })
        .then((nums) => {
            res.send({
                message: `${nums} Educations were deleted successfully!`,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while removing all educations.",
            });
        });
};
