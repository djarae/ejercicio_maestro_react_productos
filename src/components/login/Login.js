import './Login.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
function Login() {
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

    function iniciarSesion (){
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
            localStorage.setItem("nombre","Diego")
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

    function crearUsuario (){
        return 0;
      }  

    return (
      <div className="App">
        <header className="App-header">
         <div >
          <h1>
           !Bienvenidos a Negring!
          </h1>
          <p>
           Desarrolla esta plataforma a la perfeccion
          </p>
         </div >
        </header>
        <body className="App-body">
         <h1>
          Iniciar sesion
         </h1>
       <div>
        <input
          type="text"
          id="txtUsuario"
          name="hookTxtUsuario"
          onChange={handleChangeUsuario}
          value={hookTxtUsuario}
        />
        {/* <h2>Message: {hookTxtUsuario}</h2> */}
      </div>

      <div>
        <input
          type="text"
          id="txtContrasena"
          name="hookTxtContrasena"
          onChange={handleChangeContrasena}
          value={hookTxtContrasena}
        />
        {/* <h2>Message: {hookTxtContrasena}</h2> */}
      </div>

         <button onClick={iniciarSesion}>
            Ingresar 
         </button>
         <button onClick={crearUsuario}>
            Crear Usuario 
         </button>
        </body>
      </div>
    );
  }
  export default Login;
  