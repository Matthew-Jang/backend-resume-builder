const db = require("../models");
const Certification = db.certification;
const Op = db.Sequelize.Op;

// Create and Save a new Certification
exports.create = (req, res) => {
    console.log("Create certification controller");

    // Validate request
    if (!req.body.title || !req.body.institution || !req.body.year_awarded) {
        res.status(400).send({
            message: "Title, institution, and year awarded are required!",
        });
        return;
    }

    // Create a Certification
    const certification = {
        userId : req.params.userId,
        title: req.body.title,
        institution: req.body.institution,
        year_awarded: req.body.year_awarded,
    };

    // Save Certification in the database
    Certification.create(certification)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Certification.",
            });
        });
};

// Retrieve all Certifications from the database
exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Certification.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving certifications.",
            });
        });
};

// Retrieve all Certifications for a User (if associated with a user)
exports.findAllForUser = (req, res) => {
    const userId = req.params.userId;

    Certification.findAll({ where: { userId: userId } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving certifications.",
            });
        });
};

// Find a single Certification by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Certification.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Certification with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Certification with id=" + id,
            });
        });
};

// Update a Certification by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Certification.update(req.body, { where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Certification was updated successfully." });
            } else {
                res.send({
                    message: `Cannot update Certification with id=${id}. Maybe Certification was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Certification with id=" + id,
            });
        });
};

// Delete a Certification with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;

    Certification.destroy({ where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Certification was deleted successfully!" });
            } else {
                res.send({
                    message: `Cannot delete Certification with id=${id}. Maybe Certification was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Certification with id=" + id,
            });
        });
};

// Delete all Certifications from the database
exports.deleteAll = (req, res) => {
    Certification.destroy({ where: {}, truncate: false })
        .then((nums) => {
            res.send({ message: `${nums} Certifications were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all certifications.",
            });
        });
};
