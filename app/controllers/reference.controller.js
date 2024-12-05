const db = require("../models");
const Reference = db.reference;
const Op = db.Sequelize.Op;

// Create and Save a new reference
exports.create = (req, res) => {
    // Validate request
    if (!req.body.referenceName) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create a reference
    const reference = {
        userId: req.params.userId,
        referenceName: req.body.referenceName,
        relationship: req.body.relationship,
    };


    // Save reference in the database
    Reference.create(reference)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the reference.",
            });
        });
};


// Retrieve all references from the database
exports.findAll = (req, res) => {
    const referenceName = req.query.referenceName;
    var condition = referenceName
        ? { referenceName: { [Op.like]: `%${referenceName}%` } }
        : null;


    Reference.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving references.",
            });
        });
};


// Retrieve all references for a User
exports.findAllForUser = (req, res) => {
    const userId = req.params.userId;


    Reference.findAll({ where: { userId: userId } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving references.",
            });
        });
};


// Find a single reference by id
exports.findOne = (req, res) => {
    const id = req.params.id;


    Reference.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find reference with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving reference with id=" + id,
            });
        });
};


// Update a reference by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;


    Reference.update(req.body, { where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "reference was updated successfully." });
            } else {
                res.send({
                    message: `Cannot update reference with id=${id}. Maybe reference was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating reference with id=" + id,
            });
        });
};


// Delete a reference with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;


    Reference.destroy({ where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "reference was deleted successfully!" });
            } else {
                res.send({
                    message: `Cannot delete reference with id=${id}. Maybe reference was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete reference with id=" + id,
            });
        });
};


// Delete all references from the database
exports.deleteAll = (req, res) => {
    Reference.destroy({ where: {}, truncate: false })
        .then((nums) => {
            res.send({ message: `${nums} references were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all references.",
            });
        });
};



