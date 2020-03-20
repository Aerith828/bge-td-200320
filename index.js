const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log("SERVER STARTED...");
});

app.use(express.static('./public'));

app.get('/get_text' , (req, res) => {
    res.send({
        name: "Tom Jedusor",
        verified: false,
        birthdate :"31/12/1926",
        friends : [ "Severus Rogue" , "Bellatrix Lestrange" , "Lucius Malefoy aka Le Couard"],
    });
});