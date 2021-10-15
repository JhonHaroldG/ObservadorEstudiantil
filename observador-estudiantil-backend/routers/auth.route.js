const express= require('express');
const usuarioRoute = express.Router();
const jwt = require('jsonwebtoken');

let usuario = require("../modelo/usuario");

usuarioRoute.route("/login").post((req,res) => {
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
            jwt.sign({id:resultado._id, user:resultado.usuario}, 'P@sa_123$', (error, token) => {
                if(error) {
                    res.status(500).json({message:'error al codificar el usuario'})
                    console.log(error);
                }else {
                    res.status(200).json({
                        code:200,
                        token
                    })
                }
            })
        }
    });
});
module.exports = usuarioRoute;

