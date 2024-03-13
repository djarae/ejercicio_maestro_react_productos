import axios from "axios";
    const insertarProducto=async function(id,nombre,detalle,stock){
         let values
         await axios.post("http://127.0.0.1:8000/insertarProducto?id='"+id+"'&nombre='"+nombre+"'&detalle='"+detalle+"'&stock='"+stock+"'",{withCredentials: true })
         .then(function (response) {
             values = response.data
             alert( "Producto insertado correctamente en la base de datos.")
         })
         .catch(function (error) {
             // handle error
             console.log("no funciona!");
             console.log(error);
         })
        return 0;
  }


export default insertarProducto;