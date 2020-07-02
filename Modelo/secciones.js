const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeccionSchema = new Schema({ 
    urlImagen: String,
    nombre: String,
    descripcion: String
});

module.exports = mongoose.model("Seccion", SeccionSchema);
