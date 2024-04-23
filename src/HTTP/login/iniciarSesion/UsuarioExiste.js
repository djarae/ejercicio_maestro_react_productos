import axios from "axios";
    const UsuarioExiste=async function(usuarioAuxiliar,contrasenaAuxiliar){
         await axios.get("http://127.0.0.1:8000/login?nombre='"+usuarioAuxiliar+"'&contrasena='"+contrasenaAuxiliar+"'", { withCredentials: true })
         .then(function (response) {
             // handle success
             console.log("funciona! l RESPONSE ES ");
             console.log(response);
             var auxLimiteFiltro=0//Se utiliza asi para que sea integer
             var auxPaginacion=1
             var values = response.data
             console.log("values de response");console.log(values)
             
             if (values==true){
             localStorage.setItem("usuarioActivo",true)
             localStorage.setItem("nombre","Diego")//Debo agregar sesion del usuario activo
             localStorage.setItem("limiteFiltros",auxLimiteFiltro)
             localStorage.setItem("paginacion",auxPaginacion)
             alert( "Se ha iniciado sesion de:" + localStorage.getItem("nombre") + ". Usuario activo es " +  localStorage.getItem("usuarioActivo"))
           }else{
             alert( "Nombre o password incorrecto");
           }
             
             window.location.href = window.location.href;
         })
         
        return 0;
  }


export default UsuarioExiste;