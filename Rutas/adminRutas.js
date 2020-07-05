const express =  require("express");
const adminControl = require('../Control/adminControl');

var api = express.Router();

//Rutas agregar Admins
api.post("/", adminControl.crearAdmin);
//Rutas consultar Admins
api.get("/", adminControl.obtenerAdmin);
//Rutas actualizar Admins
api.put("/:id", adminControl.actualizarAdmin);
//Rutas eliminar Admins
api.delete("/:id", adminControl.eliminarAdmin);
//Rutas agregar Admins
api.post("/login", adminControl.login);


module.exports = api;
