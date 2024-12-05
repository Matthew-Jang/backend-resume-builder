module.exports = (app) => {
  const contact_info = require("../controllers/contact-info.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new contact_info for a User
  router.post("/:userId", [authenticate], contact_info.create);

  // Retrieve all contact_infos
  router.get("/", [authenticate], contact_info.findAll);

  // Retrieve all contact_infos for a User
  router.get("/:userId", [authenticate], contact_info.findAllForUser);

  // Retrieve a single contact_info with id
  router.get("/:userId/:id", [authenticate], contact_info.findOne);

  // Update a contact_info with id
  router.put("/:userId/:id", [authenticate], contact_info.update);

  // Delete a contact_info with id
  router.delete("/:userId/:id", [authenticate], contact_info.delete);

  // Delete all contact_infos
  router.delete("/", [authenticate], contact_info.deleteAll);

  app.use("/resume-t4/api/contactInfos", router);
};
