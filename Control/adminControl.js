const Admin = require("../Modelo/admins");
//const { param } = require("../Server/app");

// Crear Admin

function crearAdmin(req, res) {
  var admin = new Admin();
  var parametros = req.body;

  admin.nombre = parametros.nombre;
  admin.apellido = parametros.apellido;
  admin.genero = parametros.genero;
  admin.cedula = parametros.cedula;
  admin.direccion = parametros.direccion;
  admin.email = parametros.email;
  admin.pass = parametros.pass;
  admin.tel = parametros.tel;
  
  admin.save((err,adminNuevo)=>{
      if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!adminNuevo){
            res.status(200).send({message:"No fue posible realizar el registro de admin"});
          } else {
            res.status(200).send({
                status:"Admin Creado",
                admin: adminNuevo,
                statusCode: 200
            });
          }
      }
      
  })
}

//Obtener Admin

function obtenerAdmin(req, res){
  Admin.find((err,adminsEncontrados)=>{
    if(err){
        res.status(500).send({message:"Error del servidor"});
      } else {
          if(!adminsEncontrados){
            res.status(200).send({message:"No fue posible obtener el registro de admin"});
          } else {
            res.status(200).send({
                status:"Admins Encontrado",
                admin: adminsEncontrados
            });
          }
      }

  });
}

//Actualizar  Admin

function actualizarAdmin(req, res){
    var adminId = req.params.id;
    var nuevosDatosAdmin = req.body;

    Admin.findByIdAndUpdate(adminId,nuevosDatosAdmin,(err,adminActualizado )=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!adminActualizado){
              res.status(200).send({message:"No fue posible actualizar el registro de admin"});
            } else {
              res.status(200).send({
                  status:"Admin Actualizado",
                  admin: adminActualizado
              });
            }
        }
  
    });
  }

//Eliminar Admin

function eliminarAdmin(req, res){
    var adminId = req.params.id;

    Admin.findByIdAndDelete(adminId,(err,adminEliminado)=>{
      if(err){
          res.status(500).send({message:"Error del servidor"});
        } else {
            if(!adminEliminado){
              res.status(404).send({message:"No fue posible actualizar el registro de admin"});
            } else {
              res.status(200).send({
                  status:"Admin Eliminado",
                  admin: adminEliminado
              });
            }
        }
  
    });
  }


function login(req, res){
  var params = req.body;

    Admin.findOne({ email: params.email } , (error, userLogged) =>{
      if(error){
        
        res.send({
          message: "Errror en el srvidor",
          statusCode: 500
        })

      }else{

          if(!userLogged) {
            res.send({
              message: "El usuario no existe",
              statusCode: 400
            })

          }else{

            if(userLogged.pass == params.pass){
              res.send({
                message:"Bienvenido",
                statusCode: 200
              })
            }else{
              res.send({
                message:"No coincide la contraseña",
                statusCode: 401
              })
            }

          }  

      }

  })

}   
//Exportamos las funciones

module.exports = {
    crearAdmin,
    obtenerAdmin,
    actualizarAdmin,
    eliminarAdmin,
    login
}