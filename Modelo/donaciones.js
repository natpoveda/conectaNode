const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonacionSchema = new Schema({
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
  monto: Number,
  tipoPago: String
});

module.exports = mongoose.model("Donacion", DonacionSchema);
