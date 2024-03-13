import axios from "axios";
    const detailProducto=async function(id){
         //Leemos el ultimo producto para agregar como ID el sgte
         console.log("id desde http detaill prod js",id)
         let values
         await axios.get("http://127.0.0.1:8000/getDetailProducto?id='"+id+"'",{withCredentials: true })
         .then(function (response) {
             values = response.data
             console.log("values de response desde detalle prd js");console.log(values)
             alert( "detail  EL PROD")
             console.log("detalle prod desde su funct http",values.datax[0].detalle)
         })
         .catch(function (error) {
             // handle error
             console.log("no funciona!");
             console.log(error);
         })
        return values.datax[0].detalle;
  }

export default detailProducto;