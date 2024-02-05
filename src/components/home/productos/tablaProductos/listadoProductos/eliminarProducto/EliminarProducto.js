import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';

function EliminarProducto() {


    return (
      <div>
       <Popup trigger=
          {<button> Eliminar Producto </button>}
          position="right center">  
          <div>¿Esta seguro que desea eliminar el producto?</div>
          <button>Eliminar</button>
       </Popup>
      </div>
    );
  }
  export default EliminarProducto;
  