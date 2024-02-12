//Imports de archivos (Re-Utilizables en VUE Y ANGULAR)
import getNextProducto from "./HTTP/GetNextProducto";
import insertarProducto from "./HTTP/InsertarProducto";

//Imports Exclusivos de React
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



function CrearProducto() {
  //Declaracion HOOKS EXCLUSIVAS para REACT
  const [hookTxtNProducto, setHookTxtNProducto] = useState('');
  const [hookTxtDProducto, setHookTxtDProducto] = useState('');
  const [hookTxtSProducto, setHookTxtSProducto] = useState('');

  //Funciones EXCLUSIVAS para REACT
  const handleChangeNProducto = event => {
      setHookTxtNProducto(event.target.value);
      console.log("valor product ");
      console.log(hookTxtNProducto);
    };
  const handleChangeDProducto = event => {
      setHookTxtDProducto(event.target.value);
      console.log("valor detalle ");
      console.log(hookTxtDProducto);
    };
  const handleChangeSProducto = event => {
      setHookTxtSProducto(event.target.value);
      console.log("valor stocoik ");
      console.log(hookTxtSProducto);
    };


  //Funciones Semi-Re-Utilizables en VUE y ANGULAR  
  const CrearProducto = async event => {
      // console.log("NOMBRE PRODUCTO: ");console.log(hookTxtNProducto); console.log("DETALLE PRODUCTO: ");console.log(hookTxtDProducto);console.log("STOCK PRODUCTO: ");console.log(hookTxtSProducto);
      let idNextProducto = await getNextProducto();
      // console.log("id next  p");console.log(idNextProducto)
      insertarProducto(idNextProducto,hookTxtNProducto,hookTxtDProducto,hookTxtSProducto);
      return 0;
    };

    return (
      <div>
       <Popup trigger=
          {<button> Crear Producto </button>}
          position="right center">  
          <div>Crear Producto</div>
          <p>Nombre</p>
          <input
              type="text"
              id="txtNProducto"
              name="hookTxtNProducto"
              onChange={handleChangeNProducto}
              value={hookTxtNProducto}
          />
          <h2>Message: {hookTxtNProducto}</h2>

          <p>Detalle</p>
          <input
              type="text"
              id="txtDProducto"
              name="hookTxtDProducto"
              onChange={handleChangeDProducto}
              value={hookTxtDProducto}
          />
          <h2>Message: {hookTxtDProducto}</h2>

          <p>Stock</p>
          <input
              type="text"
              id="txtSProducto"
              name="hookTxtSProducto"
              onChange={handleChangeSProducto}
              value={hookTxtSProducto}
          />
          <h2>Message: {hookTxtSProducto}</h2>
          <button onClick={CrearProducto}>Crear</button>
       </Popup>
      </div>
    );
  }
  export default CrearProducto;
  