module.exports = (app) => {
    const references = require("../controllers/reference.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new reference for a User
    router.post("/:userId", [authenticate], references.create);
  
    // Retrieve all references
    router.get("/", [authenticate], references.findAll);
  
    // Retrieve all references for a User
    router.get("/:userId", [authenticate], references.findAllForUser);
  
    // Retrieve a single reference with id
    router.get("/:userId/:id", [authenticate], references.findOne);
  
    // Update a reference with id
    router.put("/:userId/:id", [authenticate], references.update);
  
    // Delete a reference with id
    router.delete("/:userId/:id", [authenticate], references.delete);
  
    // Delete all references
    router.delete("/", [authenticate], references.deleteAll);
  
    app.use("/resume-t4/api/references", router);
  };
  