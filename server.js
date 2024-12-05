require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

const db = require("./app/models");

db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.options("*", cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/contact-info.routes")(app);
require("./app/routes/experience.routes")(app);
require("./app/routes/skill.routes")(app);
require("./app/routes/education.routes")(app);
require("./app/routes/reference.routes")(app);
// require("./app/routes/tutorial.routes")(app);
// require("./app/routes/lesson.routes")(app);
// require("./app/routes/combinded.routes.js")(app);

// ChatGPT API route
app.post("/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages format." });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo", // Change to another model if needed
        messages,
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error communicating with OpenAI API:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to communicate with OpenAI API." });
  }
});

// set port, listen for requests
const PORT = process.env.PORT || 3100;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

module.exports = app;
