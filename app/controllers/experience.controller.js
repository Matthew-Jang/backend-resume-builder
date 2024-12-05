const db = require("../models");
const Experience = db.experience;
const Op = db.Sequelize.Op;

// Create and Save a new Experience
exports.create = (req, res) => {

    console.log("create exprience controller");

    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create an Experience
    const experience = {
        userId: req.params.userId,
        title: req.body.title,
        employer: req.body.employer,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        description: req.body.description,
    };


    // Save Experience in the database
    Experience.create(experience)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Experience.",
            });
        });
};


// Retrieve all Experiences from the database
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title
        ? { title: { [Op.like]: `%${title}%` } }
        : null;


    Experience.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving experiences.",
            });
        });
};


// Retrieve all Experiences for a User
exports.findAllForUser = (req, res) => {
    const userId = req.params.userId;


    Experience.findAll({ where: { userId: userId } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving experiences.",
            });
        });
};


// Find a single Experience by id
exports.findOne = (req, res) => {
    const id = req.params.id;


    Experience.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Experience with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Experience with id=" + id,
            });
        });
};


// Update an Experience by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;


    Experience.update(req.body, { where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Experience was updated successfully." });
            } else {
                res.send({
                    message: `Cannot update Experience with id=${id}. Maybe Experience was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Experience with id=" + id,
            });
        });
};


// Delete an Experience with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;


    Experience.destroy({ where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Experience was deleted successfully!" });
            } else {
                res.send({
                    message: `Cannot delete Experience with id=${id}. Maybe Experience was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Experience with id=" + id,
            });
        });
};


// Delete all Experiences from the database
exports.deleteAll = (req, res) => {
    Experience.destroy({ where: {}, truncate: false })
        .then((nums) => {
            res.send({ message: `${nums} Experiences were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all experiences.",
            });
        });
};



