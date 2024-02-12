import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';
import deleteProducto from './HTTP/DeleteProducto';

function EliminarProducto(props) {
  const DeleteProducto = async event => {
    deleteProducto(props.id);
    return 0;
  };

    return (
      <div>
       <Popup trigger=
          {<button>Eliminar</button>}
          position="right center">  
          <div>¿Esta seguro que desea eliminar el producto?</div>
          <button onClick={DeleteProducto}>Eliminar</button>
       </Popup>
      </div>
    );
  }
  export default EliminarProducto;
  