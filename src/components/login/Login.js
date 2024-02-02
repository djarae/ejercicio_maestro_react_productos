import './Login.css';
import axios from "axios";
function Login() {

  const apiURL= "http://127.0.0.1:8000/loginParametro?nombre=PepeReact&contrasena=qiqi"//API URL Cloud
    


    function iniciarSesion (){
        localStorage.setItem("usuarioActivo",true)
        localStorage.setItem("nombre","Diego")


        axios.get(apiURL, { withCredentials: true })
        .then(function (response) {
            // handle success
            console.log("funciona!");
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function (response) {
          console.log("Esto es then");
        });

        
  
        alert( "Se ha iniciado sesion de:" + localStorage.getItem("nombre") + ". Usuario activo es " +  localStorage.getItem("usuarioActivo"))
        // window.location.href = window.location.href;
        return 0;
      }


    function crearUsuario (){
        axios.get('http://127.0.0.1:8000/login', { withCredentials: true })
        .then(function (response) {
            // handle success
            console.log("funciona!");
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

        return 0;
      }  


      // Notifies the server about the change
      // const notifyServer = () => {
      //   axios.post('/testInsert', {
      //       message: 'Counter Updated!',
      //   })
      // }

    


    return (
      <div className="App">
        <header className="App-header">
         <div >
          <h1>
           !Bienvenidos a Negring!
          </h1>
          <p>
           Desarrolla esta plataforma a la perfeccion
          </p>
         </div >
        </header>
        <body className="App-body">
         <h1>
          Iniciar sesion
         </h1>
         <div>
          <input  id="inpUsuario" class="form-control"></input>
         </div>
         <div>
          <input  id="inpContrasena" class="form-control"></input>
         </div>
         <button onClick={iniciarSesion}>
            Ingresar 
         </button>
         <button onClick={crearUsuario}>
            Crear Usuario 
         </button>
        </body>
      </div>
    );
  }
  export default Login;
  