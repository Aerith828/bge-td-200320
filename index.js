const express = require("express");

const app = express();  

app.listen(3000, () => {
    console.log("SERVER STARTED...");
});

app.use(express.static("./public"));

app.get("/api/user", (req, res) => {
    res.send({
        name: "Tom Jedusor",
        verified: false,
        birthdate: new Date(1926, 11, 31),
        friends: ["Severus Rogue aka le Traître", "Bellatrix Lestrange aka la Folle", "Lucius Malefoy aka Le Couard"],
    });
});