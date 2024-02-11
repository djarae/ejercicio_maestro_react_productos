// // import ListadoProductosJson from './ListadoProductos.json'
// import DetalleProducto from './detalleProducto/DetalleProducto'
// import ActualizarProducto from './actualizarProducto/ActualizarProducto'
// import EliminarProducto from './eliminarProducto/EliminarProducto'
import React, { useState, useEffect } from 'react';
import axios from "axios";
function ListadoProductos(props) {
  const [productos, setProductos] = useState([]);

 useEffect(() => {
  fetchData();
}, []);

  const fetchData = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/getListadoProductos"
    );
    setProductos(response.data.datax);  console.log("response.data.datax",response.data.datax);console.log("hook pzroductos:",productos)
    
    console.log("props filtros:");console.log(props);console.log(props.paginacion);console.log(props.filtroNombre);console.log(props.filtroStock);   console.log("paginacion:");console.log(props.filtroActivo);
    
    let ListadoProductosFiltrado =[]
    if (props.filtroActivo==1){
      for (let i=0;(i<response.data.datax.length);i++){
        if(response.data.datax[i].nombre.includes(props.filtroNombre)){
          ListadoProductosFiltrado.push(response.data.datax[i])
        }
      }
    }else{
      for (let i=0;(i<response.data.datax.length);i++){
          ListadoProductosFiltrado.push(response.data.datax[i])
      }
    }
    console.log("L PRODUCTS FILTR");console.log(ListadoProductosFiltrado)  
    setProductos( ListadoProductosFiltrado); 
  };

  return (
    <tbody>
      {productos.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.stock}</td>
                <td><DetalleProducto></DetalleProducto></td>
                <td><ActualizarProducto></ActualizarProducto></td>
                <td><EliminarProducto></EliminarProducto></td>
            </tr>
     ))}
    </tbody>
  );
}

export default ListadoProductos;



