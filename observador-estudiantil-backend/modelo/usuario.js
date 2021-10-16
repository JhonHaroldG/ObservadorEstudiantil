const mongoose = require('mongoose');
const schema = mongoose.Schema;

let schemaUsuarios = new schema(
{
    usuario:{
        type: String,
    },
    contrasena:{
        type: String,
    }
       
},{
    colletion: "usuarios"

}
    
);
module.exports = mongoose.model("usuarios", schemaUsuarios);

