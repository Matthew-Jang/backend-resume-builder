// lesssons

module.exports = (app) => {
    const lessons = require("../controllers/lesson.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Lesson for a Tutorial
    router.post("/:tutorialId/lessons/", [authenticate], lessons.create);
  
    // Retrieve all Lessons for a Tutorial
    router.get(
      "/:tutorialId/lessons/",
      [authenticate],
      lessons.findAllForTutorial
    );
  
    // Retrieve all published Lessons for a Tutorial
    router.get(
      "/:tutorialId/lessons/published",
      [authenticate],
      lessons.findAllPublished
    );
  
    // Retrieve a single Lesson with id
    router.get("/:tutorialId/lessons/:id", [authenticate], lessons.findOne);
  
    // Update a Lesson with id
    router.put("/:tutorialId/lessons/:id", [authenticate], lessons.update);
  
    // Delete a Lesson with id
    router.delete("/:tutorialId/lessons/:id", [authenticate], lessons.delete);
  
    // Delete all Lessons
    router.delete("/:tutorialId/lessons/:id", [authenticate], lessons.deleteAll);
  
    app.use("/tutorial/tutorials", router);
  };

  //////////////////////////////////////////////////////

// tutorials
  module.exports = (app) => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", [authenticate], tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/", [authenticate], tutorials.findAll);
  
    // Retrieve all Tutorials for user
    router.get("/userTut/:userId", [authenticate], tutorials.findAllForUser);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", [authenticate], tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", [authenticate], tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", [authenticate], tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", [authenticate], tutorials.deleteAll);
  
    app.use("/tutorial/tutorials", router);
  };
  
  