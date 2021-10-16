const mongoose = require('mongoose');
const schema = mongoose.Schema;

let schemaEstudiantes = new schema(
{
    tipoIdentificacion:{
        type: String,
    },
    identificacion:{
        type: String,
    },
    nombre:{
        type: String,
    },
    edad:{
        type: Number,
    },
    promedio:{
        type: Number,
    },
    grado:{
        type: String,
    },
    genero:{
        type: String,
    },
    direccion:{
        type: String,
    },
    telefono:{
        type: Number,
    },
    celular:{
        type: Number,
    },
    madre: {
        nombre: String,
        ocupacion: String,
        telefono: Number
    },
    padre: {
        nombre: String,
        ocupacion: String,
        telefono: Number
    },
    observaciones:[String]
},{
    colletion: "estudiante"
}
    
);
module.exports = mongoose.model("estudiantes", schemaEstudiantes);

