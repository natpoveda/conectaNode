const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  nombre: String,
  apellido: String,
  genero: String,
  cedula: Number,
  direccion: String,
  email: String,
  pass: String,
  tel: String
});

module.exports = mongoose.model("Admin", AdminSchema);
