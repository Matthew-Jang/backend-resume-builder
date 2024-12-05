module.exports = (app) => {
    const skills = require("../controllers/skill.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Skill for a User
    router.post("/:userId", [authenticate], skills.create);
  
    // Retrieve all Skills
    router.get("/", [authenticate], skills.findAll);
  
    // Retrieve all Skills for a User
    router.get("/:userId", [authenticate], skills.findAllForUser);
  
    // Retrieve a single Skill with id
    router.get("/:userId/:id", [authenticate], skills.findOne);
  
    // Update a Skill with id
    router.put("/:userId/:id", [authenticate], skills.update);
  
    // Delete a Skill with id
    router.delete("/:userId/:id", [authenticate], skills.delete);
  
    // Delete all Skills
    router.delete("/", [authenticate], skills.deleteAll);
  
    app.use("/resume-t4/api/skills", router);
  };
  