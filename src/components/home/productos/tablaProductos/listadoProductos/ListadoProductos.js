import ListadoProductosJson from './ListadoProductos.json'
import DetalleProducto from './detalleProducto/DetalleProducto'
import ActualizarProducto from './actualizarProducto/ActualizarProducto'
import EliminarProducto from './eliminarProducto/EliminarProducto'


function ListadoProductos(props) {

  function getListadoProductos(){
    let   ListadoProductosFiltrado=[]
    //if (  ( props.filtroNombre!="" && props.filtroStock!="")  
    //if(ListadoProductos[i].nombre.includes(props.filtroNombre)){
    console.log("props filtros:");console.log(props.filtroNombre);console.log(props.filtroStock)
    
    if (props.filtroActivo==1){
      for (let i=0;(i<ListadoProductosJson.length);i++){
        if(ListadoProductosJson[i].nombre.includes(props.filtroNombre)){
          ListadoProductosFiltrado.push(ListadoProductosJson[i])
        }
      }
    }else{
      for (let i=0;(i<ListadoProductosJson.length);i++){
          ListadoProductosFiltrado.push(ListadoProductosJson[i])
      }
    }


    console.log("L PRODUCTS FILTR");console.log(ListadoProductosFiltrado)

    let inicioI=(props.paginacion-1)*10
    let finalI=(props.paginacion*10)
 
    
    let productos = [];
    for (  let i=inicioI; ((i< ListadoProductosFiltrado.length)  && (i <finalI)   ) ;i++){
      productos.push(  
      <tr>
        <td>{i+1}</td>
        <td>{ListadoProductosFiltrado[i].nombre}</td>
        <td>{ListadoProductosFiltrado[i].stock}</td>
        <td><DetalleProducto></DetalleProducto></td> {/*Aqui debo usar props*/}
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

export default ListadoProductos;



