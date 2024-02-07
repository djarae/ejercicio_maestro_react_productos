import 'reactjs-popup/dist/index.css';
import React, { useState, useEffect } from 'react';
import ListadoProductos from './listadoProductos/ListadoProductos.js'

function TablaProductos() {
    const [Paginacion, setPaginacion] = useState(1);
    const [filtroActivo, setFiltroActivo] = useState(0);
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
      setFiltroActivo(0)
      //Nota: Se cambia "FiltroActivo" a 0 , ya que para poder establecer un "limite 
      //maximo de 5 filtrados hacia falta que existiese un boton y que sea por medio de boton"
    };

    const changeFiltroSProducto = event => {
      setHookFiltroSProducto(event.target.value);
      setFiltroActivo(0)

    };

    function activarFiltros (){
      setFiltroActivo(1)
      var intLFiltro = parseInt(  localStorage.getItem("limiteFiltros"));
      var auxLFiltro = intLFiltro+1
      localStorage.setItem("limiteFiltros",auxLFiltro)
      console.log("Limite filtros");console.log(localStorage.getItem("limiteFiltros"))
      if (auxLFiltro>4){
        setFiltroActivo(0)
        alert("Limite de 5 filtros por sesión alcanzado.")
      }
    }

    function desactivarFiltros (){
      setFiltroActivo(0)
    }


    return (
    <div class="container justify-content-center">
      <div class="container col-6 rounded bg-transparent  text-dark " >
        <table class="table  table-ligth table-striped    justify-content-center " >
          <thead class="thead-light"> 
            <tr>
                <th>
                  <button onClick={activarFiltros}>Filtrar</button>
                </th>
                <th scope="col"> 
                          <input type="text" id="txtFiltroNProducto" name="hookFiltroNProducto" onChange={changeFiltroNProducto} value={hookFiltroNProducto}/>
                          {/* <h2>: {hookFiltroNProducto}</h2> */}
                </th>
                <th scope="col"> 
                          <input type="text" id="txtFiltroSProducto" name="hookFiltroSProducto" onChange={changeFiltroSProducto} value={hookFiltroSProducto}/>
                          {/* <h2>: {hookFiltroSProducto}</h2> */}
                </th>
                <th>
                  <button onClick={desactivarFiltros}>Retirar Filtro</button>
                </th>
            </tr>
            <tr>
             <th scope="col">#</th>
             <th scope="col">Nombre</th>
             <th scope="col">Stock</th>
            </tr>
          </thead>
          <ListadoProductos paginacion={Paginacion} filtroNombre={hookFiltroNProducto} filtroStock={hookFiltroSProducto} filtroActivo={filtroActivo}></ListadoProductos>
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
  