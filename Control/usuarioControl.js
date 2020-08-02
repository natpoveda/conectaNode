const Usuario = require("../Modelo/usuarios");
//const { param } = require("../Server/app");

// Crear Usuario

function crearUsuario(req, res) {
  var usuario = new Usuario();
  var parametros = req.body;

  usuario.nombre = parametros.nombre;
  usuario.apellido = parametros.apellido;
  usuario.genero = parametros.genero;
  usuario.cedula = parametros.cedula;
  usuario.edad = parametros.edad;
  usuario.direccion = parametros.direccion;
  usuario.email = parametros.email;
  usuario.tel = parametros.tel;
  usuario.pais = parametros.pais;
  usuario.pid = parametros.pid;
  usuario.fecha = Date();

  
  usuario.save((err,usuarioNuevo)=>{
      if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!usuarioNuevo){
            res.status(200).send({message:"No fue posible realizar el registro de usuario"});
          } else {
            res.status(200).send({
                status:"Usuario Creado",
                usuario: usuarioNuevo,
                statusCode: 200
            });
          }
      }
      
  })
}

//Obtener Usuario
function obtenerUsuario(req, res){
  Usuario.find((err,usuariosEncontrados)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!usuariosEncontrados){
            res.status(200).send({message:"No fue posible obtener el registro de usuario"});
          } else {
            res.status(200).send({
                status:"Usuarios Encontrado",
                usuario: usuariosEncontrados
            });
          }
      }

  });
}

//Actualizar  Usuario

function actualizarUsuario(req, res){
    var usuarioId = req.params.id;
    var nuevosDatosUsuario = req.body;

    Usuario.findByIdAndUpdate(usuarioId,nuevosDatosUsuario,(err,usuarioActualizado )=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!usuarioActualizado){
              res.status(200).send({message:"No fue posible actualizar el registro de usuario"});
            } else {
              res.status(200).send({
                  status:"Usuario Actualizado",
                  usuario: usuarioActualizado
              });
            }
        }
  
    });
  }

//Eliminar Usuario

function eliminarUsuario(req, res){
    var usuarioId = req.params.id;

    Usuario.findByIdAndDelete(usuarioId,(err,usuarioEliminado)=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!usuarioEliminado){
              res.status(404).send({message:"No fue posible actualizar el registro de usuario"});
            } else {
              res.status(200).send({
                  status:"Usuario Eliminado",
                  usuario: usuarioEliminado
              });
            }
        }
  
    });
  }



//Obtener Usuario
function obtenerUsuariobyProyect(req, res){
  var proyectoId = req.params.proyectoId;

  Usuario.find({pid: proyectoId},(err,usuariosEncontrados)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!usuariosEncontrados){
            res.status(200).send({message:"No fue posible obtener el registro de usuario por proyecto", prId: proyectoId});
          } else {
            res.status(200).send({
                status:"Usuarios Encontrado",
                usuario: usuariosEncontrados,
                statusCode:200
            });
          }
      }

  });
}  

//Obtener Usuario x nombre
function obtenerUsuariobyName(req, res){

 var name = new RegExp(`.*${req.params.name}.*`,'i');
  Usuario.find({nombre: name},(err,usuariosEncontrados)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!usuariosEncontrados){
            res.status(200).send({message:"No fue posible obtener el registro de usuario por titulo", name: name});
          } else {
            res.status(200).send({
                status:"Usuarios Encontrado",
                usuario: usuariosEncontrados,
                statusCode:200
            });
          }
      }

  });
}

//Obtener Usuario x id
function obtenerUsuariobyId(req, res){
  console.log("uid", req.params);
  var id = req.params.uId;
   Usuario.find({_id: id},(err,usuariosEncontrados)=>{
     if(err){
         res.status(500).send({message:"Error del servidor"});
       } else {
           if(!usuariosEncontrados){
             res.status(200).send({message:"No fue posible obtener el registro de usuario por titulo", name: name});
           } else {
             res.status(200).send({
                 status:"Usuarios Encontrado",
                 usuario: usuariosEncontrados,
                 statusCode:200
             });
           }
       }
 
   });
 }
//Exportamos las funciones

module.exports = {
    crearUsuario,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario,
    obtenerUsuariobyProyect,
    obtenerUsuariobyName,
    obtenerUsuariobyId
  }