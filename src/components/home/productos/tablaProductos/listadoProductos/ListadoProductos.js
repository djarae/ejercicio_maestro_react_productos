import ListadoProductos from './ListadoProductos.json'
import DetalleProducto from './detalleProducto/DetalleProducto'
import ActualizarProducto from './actualizarProducto/ActualizarProducto'
import EliminarProducto from './eliminarProducto/EliminarProducto'


function Producto() {

  function getListadoProductos(){
    let productos = [];
    for (let i=0;i<ListadoProductos.length;i++){
      productos.push(  
      <tr>
        <td>{ListadoProductos[i].id}</td>
        <td>{ListadoProductos[i].nombre}</td>
        <td>{ListadoProductos[i].stock}</td>
        <DetalleProducto></DetalleProducto>
        <ActualizarProducto></ActualizarProducto>
        <EliminarProducto></EliminarProducto>
     </tr>)
    }
    return(
      productos
    );
  }

  return (
    <tbody>
      {getListadoProductos()}
    </tbody>
  );
}

export default Producto;