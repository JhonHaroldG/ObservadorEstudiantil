const express= require('express');
const usuarioRoute = express.Router();

let usuario = require("../modelo/usuario");

usuarioRoute.route("/autenticacion").post((req,res) => {
    let query = {
        usuario: req.body.usuario,
        contrasena: req.body.contrasena
    };
    usuario.findOne(query, (err, resultado) => {
        if (err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log("Result : ", resultado);
            res.json(resultado);
        }
    });
});
module.exports = usuarioRoute;