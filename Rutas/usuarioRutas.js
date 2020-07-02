const express =  require("express");
const usuarioControl = require('../Control/usuarioControl');

var api = express.Router();

//Rutas agregar Usuarios
api.post("/", usuarioControl.crearUsuario);
//Rutas consultar Usuarios
api.get("/", usuarioControl.obtenerUsuario);
//Rutas actualizar Usuarios
api.put("/:id", usuarioControl.actualizarUsuario);
//Rutas eliminar Usuarios
api.delete("/:id", usuarioControl.eliminarUsuario);

module.exports = api;
