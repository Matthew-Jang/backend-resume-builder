module.exports = (app) => {
    const experiences = require("../controllers/experience.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Experience for a User
    router.post("/:userId/experiences", [authenticate], experiences.create);
  
    // Retrieve all Experiences
    router.get("/", [authenticate], experiences.findAll);
  
    // Retrieve all Experiences for a User
    router.get("/:userId/experiences", [authenticate], experiences.findAllForUser);
  
    // Retrieve a single Experience with id
    router.get("/:userId/experiences/:id", [authenticate], experiences.findOne);
  
    // Update an Experience with id
    router.put("/:userId/experiences/:id", [authenticate], experiences.update);
  
    // Delete an Experience with id
    router.delete("/:userId/experiences/:id", [authenticate], experiences.delete);
  
    // Delete all Experiences
    router.delete("/", [authenticate], experiences.deleteAll);
  
    app.use("/resume-t4/api", router);
  };
  