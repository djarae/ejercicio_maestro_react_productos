//Imports
import 'reactjs-popup/dist/index.css';
import React, { useState, useEffect,useReducer } from 'react';
import axios from "axios";
import DetalleProducto from './detalleProducto/DetalleProducto'
import ActualizarProducto from './actualizarProducto/ActualizarProducto'
import EliminarProducto from './eliminarProducto/EliminarProducto'

function TablaProductos() {
  //Hooks
    const [Paginacion, setPaginacion] = useState(1);
    const [hookFiltroNProducto, setHookFiltroNProducto] = useState('');
    const [hookFiltroSProducto, setHookFiltroSProducto] = useState('');
    const [productos, setProductos] = useState([]);
    const [, forceUpdate] = useReducer(x => x + 1, 0);
   
   //Funciones
    function handleClick() {
      forceUpdate();
    }

    useEffect(() => {
      let auxNumber = 1
      localStorage.setItem("paginacion",auxNumber) 
      fetchData();
    }, []);

    const fetchData = async () => {
      console.log("URL ES ");
      console.log("http://127.0.0.1:8000/getListadoProductos?nombreProd='"+hookFiltroNProducto+"'&stockProd='"+hookFiltroSProducto+"'"+"&paginacion='"+localStorage.getItem("paginacion")+"'")
        const response = await axios.get(
          "http://127.0.0.1:8000/getListadoProductos?nombreProd='"+hookFiltroNProducto+"'&stockProd='"+hookFiltroSProducto+"'"+"&paginacion='"+localStorage.getItem("paginacion")+"'",{withCredentials: true }
        ) 
        let ListadoProductosFiltrado =[]
        for (let i=0;(i<response.data.datax.length);i++){
              ListadoProductosFiltrado.push(response.data.datax[i])
        }
        setProductos( ListadoProductosFiltrado); 
      };

    function paginaMenos (){
      var intPaginacion = parseInt(localStorage.getItem("paginacion"));
      if ( intPaginacion>1){
        let auxNumber =1
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
    };
    const changeFiltroSProducto = event => {
      setHookFiltroSProducto(event.target.value);
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
        fetchData();
        handleClick();
      // }
    }

//JSX;
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
              </th>
              <th scope="col"> 
                <input type="text" id="txtFiltroSProducto" name="hookFiltroSProducto" onChange={changeFiltroSProducto} value={hookFiltroSProducto}/>
              </th>
            </tr>
            <tr>
             <th scope="col">#</th>
             <th scope="col">Nombre</th>
             <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.stock}</td>
                <td><DetalleProducto id={item.id}></DetalleProducto></td>
                <td><ActualizarProducto id={item.id} ></ActualizarProducto></td>
                <td><EliminarProducto id={item.id}></EliminarProducto></td>
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
  