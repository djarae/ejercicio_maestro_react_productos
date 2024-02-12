import axios from "axios";
//MUY IMPORTANTE EL USO DE "ASYNC" & "AWAIT" para evitar errores de inconsistencia de data
    const getNextUsuario= async function(){
        //Leemos el ultimo producto para agregar como ID el sgte
        let values
        await axios.get("http://127.0.0.1:8000/getLastUsuario", { withCredentials: true })
        .then(function (response) {
            values = response.data
            console.log("values de response get last user");console.log(values)
            alert( "CONSULTAMOS EL ULTIMO PROD")
        })
        .catch(function (error) {
            // handle error
            console.log("no funciona!");
            console.log(error);
        })
        return values
  }
export default getNextUsuario;