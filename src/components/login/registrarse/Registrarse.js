//Imports de archivos (Re-Utilizables en VUE Y ANGULAR)
//import getNextUsuario from "./HTTP/GetNextUsuario";
// import insertarUsuario from "./HTTP/InsertarUsuario";

import getNextUsuario from "../../../HTTP/login/registrarse/GetNextUsuario";
import insertarUsuario from "../../../HTTP/login/registrarse/InsertarUsuario";

//Imports Exclusivos de React
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function CrearUsuario() {
  //Declaracion HOOKS EXCLUSIVAS para REACT
    console.log("Creacion de usuario")
    const [hookUsuario, setHookUsuario] = useState('');
    const [hookCorreo, setHookCorreo] = useState('');
    const [hookRepCorreo, setHookRepCorreo] = useState('');
    const [hookCargo, setHookCargo] = useState('');
    const [hookContrasena, setHookContrasena] = useState('');
    const [hookRepContrasena, setHookRepContrasena] = useState('');

  //Funciones EXCLUSIVAS para REACT
    const handleChangeHookUsuario = event => {
        setHookUsuario(event.target.value);
        console.log("valor user "); console.log(hookUsuario);
        };
    const handleChangeHookCorreo = event => {
        setHookCorreo(event.target.value);
        console.log("valor correo "); console.log(hookCorreo);
        };
    const handleChangeHookRepCorreo = event => {
        setHookRepCorreo(event.target.value);
        console.log("valor repCorreo ");console.log(hookRepCorreo);
        };

    const handleChangeHookCargo = event => {
        setHookCargo(event.target.value);
        console.log("valor cargo ");console.log(hookCargo);
        };
    const handleChangeHookContrasena = event => {
        setHookContrasena(event.target.value);
        console.log("valor contrasena ");console.log(hookContrasena);
        };
    const handleChangeHookRepContrasena = event => {
        setHookRepContrasena(event.target.value);
        console.log("valor rep cntranea ");console.log(hookRepContrasena);
        };

  //Funciones Semi-Re-Utilizables en VUE y ANGULAR  
  const CrearUsuario = async event => {
      // console.log("NOMBRE PRODUCTO: ");console.log(hookUsuario); console.log("DETALLE PRODUCTO: ");console.log(hookCorreo);console.log("STOCK PRODUCTO: ");console.log(hookRepCorreo);
      let idNextUsuario = await getNextUsuario();
      // console.log("id next  p");console.log(idNextUsuario)
      insertarUsuario(idNextUsuario,hookUsuario,hookCorreo,hookRepCorreo,hookCargo,hookContrasena,hookRepContrasena);
      return 0;
    };
    return (
      <div>
       <Popup trigger=
          {<button> Crear Usuario </button>}
          position="right center">  

          <div>Crear Usuario</div>
          <p>Usuario</p>
          <input type="text" id="txtUsuario"name="hookUsuario" onChange={handleChangeHookUsuario}  value={hookUsuario}/>

          <p>Correo</p>
          <input type="text"  id="txtCorreo"name="hookCorreo" onChange={handleChangeHookCorreo} value={hookCorreo}/>

          <p>Repetir correo</p>
          <input type="text" id="txtRepCorreo"  name="hookRepCorreo"  onChange={handleChangeHookRepCorreo}  value={hookRepCorreo}/>
          
          <p>Cargo</p>
          <input type="text" id="txtCargo"  name="hookCargo"  onChange={handleChangeHookCargo}  value={hookCargo}/>
  
          <p>Contrasena</p>
          <input type="text" id="txtContrasena"  name="hookContrasena"  onChange={handleChangeHookContrasena}  value={hookContrasena}/>
   
          <p>Contrasena Repetir</p>
          <input type="text" id="txtRepContrasena"  name="hookRepContrasena"  onChange={handleChangeHookRepContrasena}  value={hookRepContrasena}/>

          <button onClick={CrearUsuario}>Crear</button>
       </Popup>
      </div>
    );
  }
  export default CrearUsuario;
  