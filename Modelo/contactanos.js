const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactanosSchema = new Schema({
  email: String,
  nombre: String,
  asunto: String,
  fecha: Date
});

module.exports = mongoose.model("Contactanos", ContactanosSchema);