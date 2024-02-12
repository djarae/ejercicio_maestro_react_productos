import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';
import detailProducto from './HTTP/DetailProducto';


function DetalleProducto(props) {
  const [hookDetalle, setHookDetalle] = useState('');

  const changeHookDetalle = event => {
    setHookDetalle(event.target.value);
  };

  const DetailProducto = async event => {
    setHookDetalle( await detailProducto(props.id))
    return 0;
  };

    return (
      <div>
       <Popup trigger=
          {<button >Detalle</button>}
          position="right center">  
          <div>Detalle Producto</div>  
          <button onClick={DetailProducto}>VER DETALLE</button>  
          <th scope="col"> 
                <input type="text" id="txtDetalle" name="hookDetalle" onChange={changeHookDetalle} value={hookDetalle}/>
          </th>  
       </Popup>
      </div>
    );
  }
  export default DetalleProducto;
  