const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProyectoSchema = new Schema({
  titulo: String,
  descripcion: String,
  urlImage: String,
  urlVideo: String,
  tiempo: Boolean,
  donacion: Boolean,
  seccion: String,
  fecha: Date
});

module.exports = mongoose.model("Proyecto", ProyectoSchema);