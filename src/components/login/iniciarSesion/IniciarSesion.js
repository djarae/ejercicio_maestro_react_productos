//Imports de archivos (Re-Utilizables en VUE Y ANGULAR)
import axios from "axios";
import getNextUsuario from "../registrarse/HTTP/GetNextUsuario";
import insertarUsuario from "../registrarse/HTTP/InsertarUsuario";
//Imports Exclusivos de React
import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';

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
        let usuarioAuxiliar =''//De esta forma hacemos que el hook se considere STRING
        let contrasenaAuxiliar =''
        usuarioAuxiliar=hookTxtUsuario;
        contrasenaAuxiliar=hookTxtContrasena;

        //CUIDADO CON LA ASINCRONIA AQUI ,SE CIERRA LA FUNCION ANTES DE TERMINAR
        axios.get("http://127.0.0.1:8000/login?nombre='"+usuarioAuxiliar+"'&contrasena='"+contrasenaAuxiliar+"'", { withCredentials: true })
        .then(function (response) {
            // handle success
            console.log("funciona! l RESPONSE ES ");
            console.log(response);
            var auxLimiteFiltro=0//Se utiliza asi para que sea integer
            var auxPaginacion=1
            localStorage.setItem("usuarioActivo",true)
            localStorage.setItem("nombre","Diego")//Debo agregar sesion del usuario activo
            localStorage.setItem("limiteFiltros",auxLimiteFiltro)
            localStorage.setItem("paginacion",auxPaginacion)
            var values = response.data
            console.log("values de response");console.log(values)
            alert( "Se ha iniciado sesion de:" + localStorage.getItem("nombre") + ". Usuario activo es " +  localStorage.getItem("usuarioActivo"))
          
            window.location.href = window.location.href;
        })
        .catch(function (error) {
            // handle error
            console.log("no funciona!");
            console.log(error);
            console.log("Usuario no encontrado desde js");
        })
        .then(function (response) {
          console.log("Esto es then");
        });
      
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
  