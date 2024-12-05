module.exports = (app) => {
    const professional_info = require("../controllers/professional_info.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new ProfessionalInfo for a User
    router.post("/:userId", [authenticate], professional_info.create);
  
    // Retrieve all ProfessionalInfos for a User
    router.get("/:userId", [authenticate], professional_info.findAllForUser);
  
    // Retrieve a single ProfessionalInfo with id
    router.get("/:userId/:id", [authenticate], professional_info.findOne);
  
    // Update a ProfessionalInfo with id
    router.put("/:userId/:id", [authenticate], professional_info.update);
  
    // Delete a ProfessionalInfo with id
    router.delete("/:userId/:id", [authenticate], professional_info.delete);
  
    // Delete all ProfessionalInfos
    router.delete("/", [authenticate], professional_info.deleteAll);
  
    app.use("/resume-t4/api/professional-info", router);
  };
  