const db = require("../models");
const ContactInfo = db.contact_info; // Assuming your model is named `contact_info`
const Op = db.Sequelize.Op;

// Create and Save a new ContactInfo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.full_name || !req.body.email) {
    res.status(400).send({
      message: "Full name and email cannot be empty!",
    });
    return;
  }

  // Create a ContactInfo
  const contactInfo = {
    userId: req.params.userId,
    full_name: req.body.full_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
  };

  // Save ContactInfo in the database
  ContactInfo.create(contactInfo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the ContactInfo.",
      });
    });
};

// Retrieve all ContactInfos from the database
exports.findAll = (req, res) => {
  const full_name = req.query.full_name;
  var condition = full_name ? { full_name: { [Op.like]: `%${full_name}%` } } : null;

  ContactInfo.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving contact infos.",
      });
    });
};

// Retrieve all ContactInfos for a User
exports.findAllForUser = (req, res) => {
  const userId = req.params.userId;

  ContactInfo.findAll({ where: { userId: userId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving contact infos for the user.",
      });
    });
};

// Find a single ContactInfo by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ContactInfo.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find ContactInfo with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving ContactInfo with id=" + id,
      });
    });
};

// Update a ContactInfo by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  ContactInfo.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "ContactInfo was updated successfully." });
      } else {
        res.send({
          message: `Cannot update ContactInfo with id=${id}. Maybe ContactInfo was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ContactInfo with id=" + id,
      });
    });
};

// Delete a ContactInfo with the specified id
exports.delete = (req, res) => {
  const id = req.params.id;

  ContactInfo.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "ContactInfo was deleted successfully!" });
      } else {
        res.send({
          message: `Cannot delete ContactInfo with id=${id}. Maybe ContactInfo was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete ContactInfo with id=" + id,
      });
    });
};

// Delete all ContactInfos from the database
exports.deleteAll = (req, res) => {
  ContactInfo.destroy({ where: {}, truncate: false })
    .then((nums) => {
      res.send({ message: `${nums} ContactInfos were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all contact infos.",
      });
    });
};
