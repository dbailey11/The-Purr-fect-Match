// Dependencies
const db = require("../models");

// Routes
module.exports = (app) => {

  app.post("/api/new", (req, res) => {
    const user = req.body;
    console.log(user);
    db.allpets
      .create({
        // routeName,
        ownerName: user.ownerName,
        catName: user.catName,
        breed: user.breed,
        age: user.age,
        zipcode: user.zipcode,
      })
      .then(function () {
        res.redirect("/marketplace");
      })
      .catch(function () {
        res.status(401).json(err);
      });
    // res.sendStatus(200);
  });
};
