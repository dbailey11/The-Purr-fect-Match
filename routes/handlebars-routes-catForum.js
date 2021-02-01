// Dependencies
const path = require("path");

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the handlebars HTML page that the user gets sent to.

  // Index route
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../views/index.handlebars"))
  );

  // Add route
  app.get("/add", (req, res) =>
    res.sendFile(path.join(__dirname, "../views/add.handlebars"))
  );

  // All route
  app.get("/all", (req, res) =>
    res.sendFile(path.join(__dirname, "../views/all.handlebars"))
  );

  app.get("/view", (req, res) =>
    res.sendFile(path.join(__dirname, "../views/view.handlebars"))
  );
};
