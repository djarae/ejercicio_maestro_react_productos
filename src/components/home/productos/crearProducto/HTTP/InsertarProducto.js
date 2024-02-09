import axios from "axios";
    const insertarProducto=async function(id,nombre,detalle,stock){
         //Leemos el ultimo producto para agregar como ID el sgte
         console.log("nombre, d, s ::: desde http funct Y STOCK");console.log(nombre);console.log(stock)
         let values
         await axios.post("http://127.0.0.1:8000/insertarProducto?id='"+id+"'&nombre='"+nombre+"'&detalle='"+detalle+"'&stock='"+stock+"'",{withCredentials: true })
         .then(function (response) {
             values = response.data
             console.log("values de response");console.log(values)
             alert( "INSERTAR EL PROD")
         })
         .catch(function (error) {
             // handle error
             console.log("no funciona!");
             console.log(error);
         })
        return 0;
  }


export default insertarProducto;