module.exports = (app) => {
    const skills = require("../controllers/skill.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Skill for a User
    router.post("/:userId/skills", [authenticate], skills.create);
  
    // Retrieve all Skills
    router.get("/", [authenticate], skills.findAll);
  
    // Retrieve all Skills for a User
    router.get("/:userId/skills", [authenticate], skills.findAllForUser);
  
    // Retrieve a single Skill with id
    router.get("/:userId/skills/:id", [authenticate], skills.findOne);
  
    // Update a Skill with id
    router.put("/:userId/skills/:id", [authenticate], skills.update);
  
    // Delete a Skill with id
    router.delete("/:userId/skills/:id", [authenticate], skills.delete);
  
    // Delete all Skills
    router.delete("/", [authenticate], skills.deleteAll);
  
    app.use("/resume-t4/api/skills", router);
  };
  