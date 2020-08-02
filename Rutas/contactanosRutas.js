const express =  require("express");
const contactanosControl = require('../Control/contactanosControl');

var api = express.Router();

//Rutas agregar Contactanos
api.post("/", contactanosControl.crearContactanos);
//Rutas consultar Contactanos
api.get("/", contactanosControl.obtenerContactanos);
//Rutas consultar Contactanos by ID
api.get("/:id", contactanosControl.encontrarContactanosByID);
//Rutas eliminar Contactanos
api.delete("/:id", contactanosControl.eliminarContactanos);



module.exports = api;
