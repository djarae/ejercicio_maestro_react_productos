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
        <header className="App-header">
          <div>
            <Productos></Productos> 
            {/* <Usuarios></Usuarios>  */}
            <button onClick={cerrarSesion}> Cerrar Sesion </button>
          </div >
        </header>
      </div>
    );
  }
  export default Home;
  