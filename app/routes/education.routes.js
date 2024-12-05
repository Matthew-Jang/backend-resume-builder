module.exports = (app) => {
    const educations = require("../controllers/education.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Education for a User
    router.post("/:userId", [authenticate], educations.create);
  
    // Retrieve all Educations
    router.get("/", [authenticate], educations.findAll);
  
    // Retrieve all Educations for a User
    router.get("/:userId", [authenticate], educations.findAllForUser);
  
    // Retrieve a single Education with id
    router.get("/:userId/:id", [authenticate], educations.findOne);
  
    // Update an Education with id
    router.put("/:userId/:id", [authenticate], educations.update);
  
    // Delete an Education with id
    router.delete("/:userId/:id", [authenticate], educations.delete);
  
    // Delete all Educations
    router.delete("/", [authenticate], educations.deleteAll);
  
    app.use("/resume-t4/api/educations", router);
  };
  