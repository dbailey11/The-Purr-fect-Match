// Dependencies
const path = require("path");
const db = require("../models");

//import marketuser.js
// Routes
module.exports = (app) => {
  // Each of the below routes just handles the handlebars HTML page that the user gets sent to.

  // Index route
  app.get(
    "/",
    (req, res) => res.render("index")
    // res.sendFile(path.join(__dirname, "../views/index.handlebars"))
  );

  app.get("/match", (req, res) => {
    // connection to match

    res.render("match");
  });

  app.get("/marketplace", (req, res) => {
    db.allpets
      .findAll({ raw: true, nest: true })
      .then((data) => {
        const hbCatData = {
          cats: data,
    
        }
      res.render("marketplace", hbCatData)}
      );
    // connection to marketplaceTable, retrieve all, and pass the returned value to render
  });
};
