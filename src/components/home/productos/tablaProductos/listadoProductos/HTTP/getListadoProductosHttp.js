import axios from "axios";
    const getListadoProductosHttp=async function(){
         //Leemos el ultimo producto para agregar como ID el sgte
         console.log("GET LIST PROD");
         let values
         await axios.get("http://127.0.0.1:8000/getListadoProductos",{withCredentials: true })
         .then(function (response) {
             values = response.data
             console.log("values de response");console.log(values.datax)
         })
         .catch(function (error) {
             // handle error
             console.log("no funciona GET LISujuiohoiuh!");
             console.log(error);
         })
        return values.datax;
  }
export default getListadoProductosHttp;