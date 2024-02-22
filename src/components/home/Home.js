// import Button from '@mui/material/Button';
import Productos from './productos/Productos.js';
// import Usuarios from './usuarios/Usuarios.js';

function Home() {
    function cerrarSesion (){
        localStorage.clear()
        alert("Se ha cerrado sesion")
        window.location.href = window.location.href;
        window.location.replace('');
        return 0;
      }

    return (
      <div className="App">
        <body className="App-body">
          <div>
            <Productos></Productos> 
            <button onClick={cerrarSesion}> Cerrar Sesion </button>
          </div >
        </body>
      </div>
    );
  }
  export default Home;
  