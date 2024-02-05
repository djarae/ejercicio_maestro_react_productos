import 'reactjs-popup/dist/index.css';
import ListadoProductos from './listadoProductos/ListadoProductos.js'

function TablaProductos() {
    return (
    <div class="container justify-content-center">
      <div class="container col-6 rounded bg-transparent  text-dark " >
        <table class="table  table-ligth table-striped    justify-content-center " >
          <thead class="thead-light"> 
            <tr>
             <th scope="col">#</th>
             <th scope="col">Nombre</th>
             <th scope="col">Stock</th>
            </tr>
          </thead>
          <ListadoProductos></ListadoProductos>
        </table>
      </div>
    </div>
    );
  }
  export default TablaProductos;
  