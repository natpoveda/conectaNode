const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContenidoSchema = new Schema({
  titulo: String,
  descripcion: String,
  urlImage: String,
  urlVideo: String,
  tiempo: Boolean,
  donacion: Boolean,
  seccion: String
});

module.exports = mongoose.model("Contenido", ContenidoSchema);