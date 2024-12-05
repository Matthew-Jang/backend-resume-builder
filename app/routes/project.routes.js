module.exports = (app) => {
    const projects = require("../controllers/project.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create a new Project for a User
    router.post("/:userId", [authenticate], projects.create);

    // Retrieve all Projects
    router.get("/", [authenticate], projects.findAll);

    // Retrieve all Projects for a User
    router.get("/:userId", [authenticate], projects.findAllForUser);

    // Retrieve a single Project with id
    router.get("/:userId/:id", [authenticate], projects.findOne);

    // Update a Project with id
    router.put("/:userId/:id", [authenticate], projects.update);

    // Delete a Project with id
    router.delete("/:userId/:id", [authenticate], projects.delete);

    // Delete all Projects
    router.delete("/", [authenticate], projects.deleteAll);

    app.use("/resume-t4/api/projects", router);
};
