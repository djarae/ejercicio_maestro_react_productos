// import Button from '@mui/material/Button';
function Login() {
    
    function iniciarSesion (){
        //Aqui debemos hacer un if que consulte en BD si el usuario y pass es correcto ,
        //si lo es cargamos el ID usuario y lo guardamos en localStorage
        localStorage.setItem("usuarioActivo",true)
        localStorage.setItem("nombre","Diego")
        alert( "Has guardado tu nombre es :" + localStorage.getItem("nombre") + ".   Usuario activo es " +  localStorage.getItem("usuarioActivo"))
        window.location.href = window.location.href;
        window.location.replace('');
        return 0;
      }

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
        <body>
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
        </body>
      </div>
    );
  }
  export default Login;
  