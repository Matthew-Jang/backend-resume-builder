const db = require("../models");
const ProfessionalInfo = db.professional_info;
const Op = db.Sequelize.Op;

// Create and Save a new ProfessionalInfo
exports.create = (req, res) => {
  console.log("Create ProfessionalInfo controller");

  // Validate request
  if (!req.body.github && !req.body.linkedin) {
    res.status(400).send({
      message: "At least one of GitHub or LinkedIn URL must be provided!",
    });
    return;
  }

  // Create a ProfessionalInfo
  const professionalInfo = {
    userId: req.params.userId,
    github: req.body.github,
    linkedin: req.body.linkedin,
  };

  // Save ProfessionalInfo in the database
  ProfessionalInfo.create(professionalInfo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the ProfessionalInfo.",
      });
    });
};

// Retrieve all ProfessionalInfos from the database
exports.findAll = (req, res) => {
  const github = req.query.github;
  var condition = github ? { github: { [Op.like]: `%${github}%` } } : null;

  ProfessionalInfo.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving professional infos.",
      });
    });
};

// Retrieve all ProfessionalInfos for a User
exports.findAllForUser = (req, res) => {
  const userId = req.params.userId;

  ProfessionalInfo.findAll({ where: { userId: userId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving professional infos.",
      });
    });
};

// Find a single ProfessionalInfo by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProfessionalInfo.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find ProfessionalInfo with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving ProfessionalInfo with id=" + id,
      });
    });
};

// Update a ProfessionalInfo by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  ProfessionalInfo.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "ProfessionalInfo was updated successfully." });
      } else {
        res.send({
          message: `Cannot update ProfessionalInfo with id=${id}. Maybe ProfessionalInfo was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ProfessionalInfo with id=" + id,
      });
    });
};

// Delete a ProfessionalInfo with the specified id
exports.delete = (req, res) => {
  const id = req.params.id;

  ProfessionalInfo.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "ProfessionalInfo was deleted successfully!" });
      } else {
        res.send({
          message: `Cannot delete ProfessionalInfo with id=${id}. Maybe ProfessionalInfo was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete ProfessionalInfo with id=" + id,
      });
    });
};

// Delete all ProfessionalInfos from the database
exports.deleteAll = (req, res) => {
  ProfessionalInfo.destroy({ where: {}, truncate: false })
    .then((nums) => {
      res.send({
        message: `${nums} ProfessionalInfos were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all professional infos.",
      });
    });
};
