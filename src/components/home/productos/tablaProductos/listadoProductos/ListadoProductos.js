import ListadoProductos from './ListadoProductos.json'
import DetalleProducto from './detalleProducto/DetalleProducto'
import ActualizarProducto from './actualizarProducto/ActualizarProducto'
import EliminarProducto from './eliminarProducto/EliminarProducto'


function Producto(props) {

  function getListadoProductos(){

    let   ListadoProductosFiltrado=[]
    //   if (  ( props.filtroNombre!="" && props.filtroStock!="")  
//  if(ListadoProductos[i].nombre.includes(props.filtroNombre)){

console.log("props filtros:")
console.log(props.filtroNombre)
console.log(props.filtroStock)



    let inicioI=(props.paginacion-1)*10
    let finalI=(props.paginacion*10)-1
    if (props.paginacion>1){
      inicioI=inicioI-1
    }
    console.log("props filtros:")
    console.log(props.filtroNombre)
    console.log(props.filtroStock)

    let productos = [];
    for (  let i=inicioI; ((i<ListadoProductos.length)  && (i <finalI)   ) ;i++){
      productos.push(  
      <tr>
        <td>{ListadoProductos[i].id}</td>
        <td>{ListadoProductos[i].nombre}</td>
        <td>{ListadoProductos[i].stock}</td>
        <td><DetalleProducto></DetalleProducto></td>
        <td><ActualizarProducto></ActualizarProducto></td>
        <td><EliminarProducto></EliminarProducto></td>
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



