import 'reactjs-popup/dist/index.css';
import CrearProducto from './crearProducto/CrearProducto.js';
import TablaProductos from './tablaProductos/TablaProductos.js';

function Productos() {
  //JSX
    return (
      <div className="App">
            <h4> CRUD Mantenedor Productos</h4>
            <TablaProductos></TablaProductos>
            <CrearProducto></CrearProducto>
      </div>
    );
  }

  export default Productos;
  