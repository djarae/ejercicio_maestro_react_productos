import axios from "axios";
    const deleteProducto=async function(id){
         //Leemos el ultimo producto para agregar como ID el sgte
         console.log("UPDATE: id , nombre, detalle, stpcl");console.log(id)
         let values
         await axios.put("http://127.0.0.1:8000/deleteProducto?id='"+id+"'",{withCredentials: true })
         .then(function (response) {
             values = response.data
             console.log("values de response");console.log(values)
             alert( "update EL PROD")
            window.location.href = window.location.href;
         })
         .catch(function (error) {
             // handle error
             console.log("no funciona!");
             console.log(error);
         })
        return 0;
  }

export default deleteProducto;