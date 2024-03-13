import axios from "axios";
//Muy importante el uso de "ASYNC" & "AWAIT" para evitar errores de inconsistencia de data
    const getNextProducto= async function(){
        let values
        await axios.get("http://127.0.0.1:8000/getLastProducto", { withCredentials: true })
        .then(function (response) {
            values = response.data
        })
        .catch(function (error) {
            console.log("No funciona!");
            console.log(error);
        })
        return values
  }
export default getNextProducto;