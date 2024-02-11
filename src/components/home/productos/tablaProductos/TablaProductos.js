import 'reactjs-popup/dist/index.css';
import React, { useState, useEffect,useReducer } from 'react';
import axios from "axios";
import Popup from 'reactjs-popup';

// import ListadoProductos from './listadoProductos/ListadoProductos.js'

function TablaProductos() {
  
    const [Paginacion, setPaginacion] = useState(1);
    const [filtroActivo, setFiltroActivo] = useState(0);
    const [hookFiltroNProducto, setHookFiltroNProducto] = useState('');
    const [hookFiltroSProducto, setHookFiltroSProducto] = useState('');
    const [productos, setProductos] = useState([]);

    const [count, setCount] = useState([0]);

    const [, updateState] = React.useState();
  
    const [, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }

    useEffect(() => {
      let auxNumber = 1
      localStorage.setItem("paginacion",auxNumber) 
      fetchData();
    }, []);

    const fetchData = async () => {
        
        const response = await axios.get(
          "http://127.0.0.1:8000/getListadoProductos?nombreProd='"+hookFiltroNProducto+"'&stockProd='"+hookFiltroSProducto+"'"+"&paginacion='"+localStorage.getItem("paginacion")+"'",{withCredentials: true }
        ) 
        console.log("paginacion");console.log(localStorage.getItem("paginacion"));
        let ListadoProductosFiltrado =[]
        for (let i=0;(i<response.data.datax.length);i++){
              ListadoProductosFiltrado.push(response.data.datax[i])
        }
        console.log("response es ",response)
        setProductos( ListadoProductosFiltrado); 
      };



    function paginaMenos (){
      var intPaginacion = parseInt(localStorage.getItem("paginacion"));
      if ( intPaginacion>1){
        let auxNumber =1
        console.log("aqui llega bien")
        localStorage.setItem("paginacion",intPaginacion-auxNumber) 
        fetchData();
        let auxPag=Paginacion;
        auxPag=auxPag-1;
        setPaginacion(auxPag) 
      }
      return 0;
    }
    function paginaMas (){
      var intPaginacion = parseInt(localStorage.getItem("paginacion"));
      let auxNumber   =1
      localStorage.setItem("paginacion",intPaginacion+auxNumber)  
      fetchData(); 
      let auxPag=Paginacion;
      auxPag=auxPag+1;
      setPaginacion(auxPag)  
      fetchData(); 
      return 0;
    }

    const changeFiltroNProducto = event => {
      setHookFiltroNProducto(event.target.value);
      setFiltroActivo(0)
    };
    const changeFiltroSProducto = event => {
      setHookFiltroSProducto(event.target.value);
      setFiltroActivo(0)
    };


   async function activarFiltros (){
      var intLFiltro = parseInt(localStorage.getItem("limiteFiltros"));
      var auxLFiltro = intLFiltro+1
      localStorage.setItem("limiteFiltros",auxLFiltro)
      // if (intLFiltro>4){
      //   alert("limite de  por usuario y sesion alcanzados")
      //   setHookFiltroNProducto("")
      //   setHookFiltroSProducto("")
      // }else{
        setFiltroActivo(1)
        fetchData();
        handleClick();
      // }
    }


    function desactivarFiltros (){
      setFiltroActivo(0)
      setHookFiltroNProducto("");
      setHookFiltroSProducto("");
      fetchData();
      handleClick();
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
            </tr>
            <tr>
             <th scope="col">#</th>
             <th scope="col">Nombre</th>
             <th scope="col">Stock</th>
            </tr>
          </thead>
            {/* <ListadoProductos paginacion={Paginacion} filtroNombre={hookFiltroNProducto} filtroStock={hookFiltroSProducto} filtroActivo={filtroActivo}></ListadoProductos> */}
          <tbody>
            {productos.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.stock}</td>
                {/* <td><DetalleProducto></DetalleProducto></td>
                <td><ActualizarProducto></ActualizarProducto></td>
                <td><EliminarProducto></EliminarProducto></td> */}
            </tr>
            ))}
          </tbody>
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
  