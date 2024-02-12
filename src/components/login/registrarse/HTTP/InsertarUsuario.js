import axios from "axios";
    const insertarUsuario=async function(id,usuario,correo,repCorreo,cargo,contrasena,repContrasena){
         console.log("Vars id,user,correo,rcorre,cargo,contr,repcontr",id,usuario,correo,repCorreo,cargo,contrasena,repContrasena);
         let values
         await axios.post("http://127.0.0.1:8000/insertarUsuario?id='"+id+"'&usuario='"+usuario+"'&correo='"+correo+"'&cargo='"+cargo+"'&contrasena='"+contrasena+"'",{withCredentials: true })
         .then(function (response) {
             values = response.data
             console.log("values response");console.log(values)
             alert( "INSERTAR EL PROD")
         })
         .catch(function (error) {
             console.log("no funciona!"); // console.log(error);
         })
        return 0;
  }


export default insertarUsuario;