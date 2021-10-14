const express = require("express");
const mongoose = require('mongoose');
const database = require('./configuracion/database');
const cors = require("cors");
const bodyparser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(
   database.databaseprimary,
   {
        useNewUrlParser: true,
        useUnifiedTopology: true,
   }
).then(
    () => console.log("Operación exitosa"), 
    (error) => console.log("Falló su conexión"), 
);


const app = express();
app.use(bodyparser.json());
app.use(
 bodyparser.urlencoded({
 extended: false,
 })
);


app.use(cors());

// ROUTES
const routersEstudiantes = require("./routers/estudiantes.route");
const routersUsuarios = require("./routers/usuarios.route");
app.use("/estudiantes",routersEstudiantes);
app.use("/seguridad",routersUsuarios);
    
app.listen(3000, () => {
 console.log("Server started on port 3000");
});
