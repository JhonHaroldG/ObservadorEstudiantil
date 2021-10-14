const express= require('express');
const estudianteRoute = express.Router();

let estudiante = require("../modelo/estudiante");


estudianteRoute.route("/:id").get((req,res) => {
    let query = { _id: req.params.id };
    estudiante.findOne(query, (err, resultado) => {
        if (err){
            console.log("error",err);
            res.send(err);
        }
        else{
            res.json(resultado);
        }
    });
});

estudianteRoute.route("").get((req,res) => {
    estudiante.find({}, (err, resultado) => {
        if (err){
            console.log("error",err);
            res.send(err);
        }
        else{
            res.json(resultado);
        }
    });
});
   
estudianteRoute.route("/:id").put((req,res) => {
    console.log(req);
    estudiante.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err, resultado) => {
        if (err){
            console.log("error",err);
            res.send(err);
        }
        else{
            res.json(resultado);
        }
    });
});

/*
estudianteRoute.route("/autenticacion").post((req,res) => {
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
});*/
module.exports = estudianteRoute;