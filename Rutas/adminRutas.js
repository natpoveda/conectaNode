const express =  require("express");
const adminControl = require('../Control/adminControl');

var api = express.Router();

//Rutas agregar Usuarios
api.post("/", adminControl.crearAdmin);
//Rutas consultar Usuarios
api.get("/", adminControl.obtenerAdmin);
//Rutas actualizar Usuarios
api.put("/:id", adminControl.actualizarAdmin);
//Rutas eliminar Usuarios
api.delete("/:id", adminControl.eliminarAdmin);

module.exports = api;
