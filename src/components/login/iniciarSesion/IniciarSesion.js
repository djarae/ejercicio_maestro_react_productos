//Imports de archivos (Re-Utilizables en VUE Y ANGULAR)
import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import UsuarioExiste from "../../../HTTP/login/iniciarSesion/UsuarioExiste"
import axios from "axios";

function IniciarSesion() {
    const [hookTxtUsuario, setHookTxtUsuario] = useState('');
    const [hookTxtContrasena, setHookTxtContrasena] = useState('');
    const handleChangeUsuario = event => {
      setHookTxtUsuario(event.target.value);
      console.log("valor user ");
      console.log(hookTxtUsuario);
    };
    const handleChangeContrasena = event => {
      setHookTxtContrasena(event.target.value);
      console.log("valor contr ");
      console.log(hookTxtContrasena);
    };
    function iniciarSesionFunc (){
        let usuarioAuxiliar ='' ;let contrasenaAuxiliar =''
        usuarioAuxiliar=hookTxtUsuario;
        contrasenaAuxiliar=hookTxtContrasena;
        UsuarioExiste(usuarioAuxiliar,contrasenaAuxiliar);
        //CUIDADO CON LA ASINCRONIA AQUI ,SE CIERRA LA FUNCION ANTES DE TERMINAR
        // axios.get("http://127.0.0.1:8000/login?nombre='"+usuarioAuxiliar+"'&contrasena='"+contrasenaAuxiliar+"'", { withCredentials: true })
        // .then(function (response) {
        //     // handle success
        //     console.log("funciona! l RESPONSE ES ");
        //     console.log(response);
        //     var auxLimiteFiltro=0//Se utiliza asi para que sea integer
        //     var auxPaginacion=1
        //     var values = response.data
        //     console.log("values de response");console.log(values)
            
        //     if (values==true){
        //     localStorage.setItem("usuarioActivo",true)
        //     localStorage.setItem("nombre","Diego")//Debo agregar sesion del usuario activo
        //     localStorage.setItem("limiteFiltros",auxLimiteFiltro)
        //     localStorage.setItem("paginacion",auxPaginacion)
        //     alert( "Se ha iniciado sesion de:" + localStorage.getItem("nombre") + ". Usuario activo es " +  localStorage.getItem("usuarioActivo"))
        //   }else{
        //     alert( "Nombre o password incorrecto");
        //   }
            
        //     window.location.href = window.location.href;
        // })
        
        
      
        return 0;
    }

    return (
      <div>
          <input type="text" id="txtUsuario" name="hookTxtUsuario" onChange={handleChangeUsuario} value={hookTxtUsuario}/>
          <input type="text" id="txtContrasena"  name="hookTxtContrasena" onChange={handleChangeContrasena} value={hookTxtContrasena} />
          <button onClick={iniciarSesionFunc}> Ingresar  </button>
      </div>
    );
  }
  export default IniciarSesion;
  