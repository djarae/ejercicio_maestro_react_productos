// import Button from '@mui/material/Button';
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
            <h1>
             Seleccione el "Registro de articulos" o "Configuracion de usuarios"
            </h1>
            <button onClick={cerrarSesion}>
             Cerrar Sesion 
            </button>
          </div >
        </header>
      </div>
    );
  }
  export default Home;
  