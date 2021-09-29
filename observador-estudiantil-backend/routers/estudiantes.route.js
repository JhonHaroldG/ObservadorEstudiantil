const express= require('express');
const estudianteRoute = express.Router();

estudianteRoute.route("/").get((req,res) => {
    console.log("debe estar correcto"),
    res.send("realizado")
});
module.exports = estudianteRoute;