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
// Rutas Reportes
api.get("/reportes/:proyectoId", usuarioControl.obtenerUsuariobyProyect);
// Rutas Reportes
api.get("/search-name/:name", usuarioControl.obtenerUsuariobyName);
// Rutas Reportes
api.get("/search-byId/:uId", usuarioControl.obtenerUsuariobyId);



module.exports = api;
