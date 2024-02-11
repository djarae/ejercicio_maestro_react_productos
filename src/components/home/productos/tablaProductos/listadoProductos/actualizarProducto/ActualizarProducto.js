import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';
import updateProducto from "./HTTP/UpdateProducto";



function ActualizarProducto(props) {
  const [hookTxtNProducto, setHookTxtNProducto] = useState('');
  const [hookTxtDProducto, setHookTxtDProducto] = useState('');
  const [hookTxtSProducto, setHookTxtSProducto] = useState('');

    const handleChangeNProducto = event => {
      setHookTxtNProducto(event.target.value);
      console.log("valor user ");
      console.log(hookTxtNProducto);
    };
    
    const handleChangeDProducto = event => {
      setHookTxtDProducto(event.target.value);
      console.log("valor user ");
      console.log(hookTxtDProducto);
    };
     
    const handleChangeSProducto = event => {
      setHookTxtSProducto(event.target.value);
      console.log("valor user ");
      console.log(hookTxtSProducto);
    };

    //Funciones Semi-Re-Utilizables en VUE y ANGULAR  
  const UpdateProducto = async event => {
    // console.log("NOMBRE PRODUCTO: ");console.log(hookTxtNProducto); console.log("DETALLE PRODUCTO: ");console.log(hookTxtDProducto);console.log("STOCK PRODUCTO: ");console.log(hookTxtSProducto);
    // console.log("id next  p");console.log(idNextProducto)
    updateProducto(props.id,hookTxtNProducto,hookTxtDProducto,hookTxtSProducto);
    return 0;
  };

    return (
      <div>
       <Popup trigger=
          {<button>Actualizar</button>}
          position="right center">  
          <div>Actualizar Producto</div>

          <p>Nombre</p>
          <input
              type="text"
              id="txtNProducto"
              name="hookTxtNProducto"
              onChange={handleChangeNProducto}
              value={hookTxtNProducto}
          />
          {/* <h2>Message: {hookTxtNProducto}</h2> */}

          <p>Detalle</p>
          <input
              type="text"
              id="txtDProducto"
              name="hookTxtDProducto"
              onChange={handleChangeDProducto}
              value={hookTxtDProducto}
          />
          {/* <h2>Message: {hookTxtDProducto}</h2> */}

          <p>Stock</p>
          <input
              type="text"
              id="txtSProducto"
              name="hookTxtSProducto"
              onChange={handleChangeSProducto}
              value={hookTxtSProducto}
          />
          {/* <h2>Message: {hookTxtSProducto}</h2> */}
          <button onClick={UpdateProducto}>Actualizar</button>
       </Popup>
      </div>
    );
  }
  export default ActualizarProducto;
  