const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nombre: String,
  apellido: String,
  genero: String,
  cedula: Number,
  edad: Number,
  direccion: String,
  email: String,
  tel: String,
  pais: String,
  pid: String,
  fecha: Date
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
