import 'reactjs-popup/dist/index.css';
import React, { useState, useEffect } from 'react';
import ListadoProductos from './listadoProductos/ListadoProductos.js'

function TablaProductos() {
    const [Paginacion, setPaginacion] = useState(1);
    const [hookFiltroNProducto, setHookFiltroNProducto] = useState('');
    const [hookFiltroSProducto, setHookFiltroSProducto] = useState('');


    function paginaMenos (){
      if (Paginacion>1){
        setPaginacion(Paginacion-1)  
      }
      return 0;
    }

    function paginaMas (){
      setPaginacion(Paginacion+1)  
      return 0;
    }

    const changeFiltroNProducto = event => {
      setHookFiltroNProducto(event.target.value);
    };

    const changeFiltroSProducto = event => {
      setHookFiltroSProducto(event.target.value);
    };


    return (
    <div class="container justify-content-center">
      <div class="container col-6 rounded bg-transparent  text-dark " >
        <table class="table  table-ligth table-striped    justify-content-center " >
          <thead class="thead-light"> 
            <tr>
                <th>
                  <button >Filtrar</button>
                </th>
                <th scope="col"> 
                          <input type="text" id="txtFiltroNProducto" name="hookFiltroNProducto" onChange={changeFiltroNProducto} value={hookFiltroNProducto}/>
                          {/* <h2>: {hookFiltroNProducto}</h2> */}
                </th>
                <th scope="col"> 
                          <input type="text" id="txtFiltroSProducto" name="hookFiltroSProducto" onChange={changeFiltroSProducto} value={hookFiltroSProducto}/>
                          {/* <h2>: {hookFiltroSProducto}</h2> */}
                </th>
            </tr>
            <tr>
             <th scope="col">#</th>
             <th scope="col">Nombre</th>
             <th scope="col">Stock</th>
            </tr>
          </thead>
          <ListadoProductos paginacion={Paginacion} filtroNombre={hookFiltroNProducto} filtroStock={hookFiltroSProducto}></ListadoProductos>
        </table>
        <div>
          <tr>
            <th><button onClick={paginaMenos} >Izquierda</button></th>
            <th><p>{Paginacion}</p></th>
            <th><button  onClick={paginaMas}>Derecha</button></th>
          </tr>
        </div>
      </div>
    </div>
    );
  }
  export default TablaProductos;
  