import 'reactjs-popup/dist/index.css';
import CrearProducto from './crearProducto/CrearProducto.js';
import TablaProductos from './tablaProductos/TablaProductos.js';

function Productos() {
  //JSX
    return (
      <div className="App">
            <h5> CRUD Mantenedor Productos.</h5>
            <h6> Doble Click para filtrar, retirar filtro y actualizar listado.</h6>
            <TablaProductos></TablaProductos>
            <CrearProducto></CrearProducto>
      </div>
    );
  }

  export default Productos;
  