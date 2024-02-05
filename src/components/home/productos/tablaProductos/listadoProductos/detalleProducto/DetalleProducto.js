import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';

function DetalleProducto() {
    return (
      <div>
       <Popup trigger=
          {<button> Detalle Producto </button>}
          position="right center">  
          <div>Detalle Producto</div>
     
      
       </Popup>
      </div>
    );
  }
  export default DetalleProducto;
  