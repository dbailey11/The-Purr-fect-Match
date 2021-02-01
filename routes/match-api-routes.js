//Dependencies

const Cats = require("../models/match");


//Routes

module.exports = function (app) {
    app.get("/", function (req, res) {
        const data = {name: {}, temperamentOne: {}, temperamentTwo: {}, temperamentThree: {}, lifeSpan: {}, size: {}, wikipediaLink: {} };
    });
};

Cats.findall({}).then(function (result) {
    console.log(result);
    data.Cats = result;
});

res.render("index", {alldata: data});

app.get("api/Cats/:catid?", (req, res) => {

    if (req.params.catid){
        Cats.findOne({
            where: {
                id: req.params.catid
            }
        }).then(function {
            return res.json(result);
        });
    }
    else{
        Cats.findall({}).then(function(result){
            return res.json(result);
        });
    }
})