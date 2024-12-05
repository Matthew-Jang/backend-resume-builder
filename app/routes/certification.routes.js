module.exports = (app) => {
    const certifications = require("../controllers/certification.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create a new Certification for a User
    router.post("/:userId", [authenticate], certifications.create);

    // Retrieve all Certifications
    router.get("/", [authenticate], certifications.findAll);

    // Retrieve all Certifications for a User
    router.get("/:userId", [authenticate], certifications.findAllForUser);

    // Retrieve a single Certification with id
    router.get("/:userId/:id", [authenticate], certifications.findOne);

    // Update a Certification with id
    router.put("/:userId/:id", [authenticate], certifications.update);

    // Delete a Certification with id
    router.delete("/:userId/:id", [authenticate], certifications.delete);

    // Delete all Certifications
    router.delete("/", [authenticate], certifications.deleteAll);

    app.use("/resume-t4/api/certifications", router);
};
