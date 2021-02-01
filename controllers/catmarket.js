var express = require("express");
var router = express.Router();
var catsForum = require("../models/marketusers.js");

router.get("/", function (req, res) {
  res.redirect("/catmarket");
});

router.get("/catmarket", function (req, res) {
  catsForum.all(function (catData) {
    res.render("index", { cat_data: catData });
  });
});

router.post("/cats/create", function (req, res) {
  catsForum.create(req.body.cat_name, function (result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/catmarket/:id", function (req, res) {
  catsForum.update(req.params.id, function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
