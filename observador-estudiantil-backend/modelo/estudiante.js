const mongoose = require('mongoose');
const schema = mongoose.Schema;
let schemaEstudiantes = new schema(
{
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
    acudiente:{
        type: String,
    }
       
},{
    colletion: "estudiante"

}
    
);
module.exports = mongoose.model("estudiantes", schemaEstudiantes);

