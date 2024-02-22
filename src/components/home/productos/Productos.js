import 'reactjs-popup/dist/index.css';
import CrearProducto from './crearProducto/CrearProducto.js';
import TablaProductos from './tablaProductos/TablaProductos.js';

function Productos() {
  //JSX
    return (
      <div>
            <h3> CRUD Mantenedor Productos.</h3>
            <CrearProducto></CrearProducto>
            <TablaProductos></TablaProductos>
      </div>
    );
  }

  export default Productos;
  