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
  