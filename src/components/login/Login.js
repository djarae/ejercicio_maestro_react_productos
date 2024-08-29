import axios from "axios";
import React, { useState } from 'react';
import IniciarSesion from './iniciarSesion/IniciarSesion.js'
import CrearUsuario from './registrarse/Registrarse.js'
import './Login.css';
import { Button } from "bootstrap";

function Login() {
  // const [hookTxtUsuario, setHookTxtUsuario] = useState('');
  // const [hookTxtContrasena, setHookTxtContrasena] = useState('');

    // const handleChangeUsuario = event => {
    //   setHookTxtUsuario(event.target.value);
    //   console.log("valor user ");
    //   console.log(hookTxtUsuario);
    // };
    // const handleChangeContrasena = event => {
    //   setHookTxtContrasena(event.target.value);
    //   console.log("valor contr ");
    //   console.log(hookTxtContrasena);
    // };
    // function iniciarSesion (){
    //     let usuarioAuxiliar =''//De esta forma hacemos que el hook se considere STRING
    //     let contrasenaAuxiliar =''
    //     usuarioAuxiliar=hookTxtUsuario;
    //     contrasenaAuxiliar=hookTxtContrasena;

    //     //CUIDADO CON LA ASINCRONIA AQUI ,SE CIERRA LA FUNCION ANTES DE TERMINAR
    //     axios.get("http://127.0.0.1:8000/login?nombre='"+usuarioAuxiliar+"'&contrasena='"+contrasenaAuxiliar+"'", { withCredentials: true })
    //     .then(function (response) {
    //         // handle success
    //         console.log("funciona! l RESPONSE ES ");
    //         console.log(response);
    //         var auxLimiteFiltro=0//Se utiliza asi para que sea integer
    //         var auxPaginacion=1
    //         localStorage.setItem("usuarioActivo",true)
    //         localStorage.setItem("nombre","Diego")//Debo agregar sesion del usuario activo
    //         localStorage.setItem("limiteFiltros",auxLimiteFiltro)
    //         localStorage.setItem("paginacion",auxPaginacion)
    //         var values = response.data
    //         console.log("values de response");console.log(values)
    //         alert( "Se ha iniciado sesion de:" + localStorage.getItem("nombre") + ". Usuario activo es " +  localStorage.getItem("usuarioActivo"))
          
    //         window.location.href = window.location.href;
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log("no funciona!");
    //         console.log(error);
    //         console.log("Usuario no encontrado desde js");
    //     })
    //     .then(function (response) {
    //       console.log("Esto es then");
    //     });
      
    //     return 0;
    //   }


    function probarApiNewLaravel (){

      
      axios.get("http://127.0.0.1:8000/products", { withCredentials: true })
      .then(function (response) {
        console.log(response);
      })
    
      return 0;
    }


   async function probarApiNewSpringboot (){
      console.log("boton springboot");
      const response = await fetch('http://127.0.0.1:8080/api/v1/democors');
      const body = await response.text();

      console.log(body);
      return 0;
    }


    
   async function probarApiNewAspNet (){
    console.log("boton aspnet");
    const response = await fetch('https://localhost:7032/weatherforecast');
    const body = await response.text();

    console.log(body);
    return 0;
  }

    return (
      <div className="App">
        <body className="App-body">
          <h1>Iniciar sesion</h1>
          <IniciarSesion></IniciarSesion>
          <CrearUsuario ></CrearUsuario>
          <button onClick={probarApiNewLaravel}> ProbarLaravel  </button>
          <button onClick={probarApiNewSpringboot}> ProbarSpringboot  </button>
          <button onClick={probarApiNewAspNet}> probarApiNewAspNet  </button>
     
        </body>
      </div>
    );
  }
  export default Login;
  