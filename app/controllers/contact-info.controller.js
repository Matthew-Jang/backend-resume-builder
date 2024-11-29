const db = require("../models");
const Contact_Info = db.contact_info;
const Op = db.Sequelize.Op;

// Create and Save a new Contact_Info
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create an Contact_Info
    const contact_info = {
        userId: req.params.userId,
        title: req.body.title,
        employer: req.body.employer,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        description: req.body.description,
    };


    // Save Contact_Info in the database
    Contact_Info.create(contact_info)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Contact_Info.",
            });
        });
};


// Retrieve all Contact_Infos from the database
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title
        ? { title: { [Op.like]: `%${title}%` } }
        : null;


    Contact_Info.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving contact_infos.",
            });
        });
};


// Retrieve all Contact_Infos for a User
exports.findAllForUser = (req, res) => {
    const userId = req.params.userId;


    Contact_Info.findAll({ where: { userId: userId } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving contact_infos.",
            });
        });
};


// Find a single Contact_Info by id
exports.findOne = (req, res) => {
    const id = req.params.id;


    Contact_Info.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Contact_Info with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Contact_Info with id=" + id,
            });
        });
};


// Update an Contact_Info by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;


    Contact_Info.update(req.body, { where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Contact_Info was updated successfully." });
            } else {
                res.send({
                    message: `Cannot update Contact_Info with id=${id}. Maybe Contact_Info was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Contact_Info with id=" + id,
            });
        });
};


// Delete an Contact_Info with the specified id
exports.delete = (req, res) => {
    const id = req.params.id;


    Contact_Info.destroy({ where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Contact_Info was deleted successfully!" });
            } else {
                res.send({
                    message: `Cannot delete Contact_Info with id=${id}. Maybe Contact_Info was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Contact_Info with id=" + id,
            });
        });
};


// Delete all Contact_Infos from the database
exports.deleteAll = (req, res) => {
    Contact_Info.destroy({ where: {}, truncate: false })
        .then((nums) => {
            res.send({ message: `${nums} Contact_Infos were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all contact_infos.",
            });
        });
};



