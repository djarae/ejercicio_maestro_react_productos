// import Button from '@mui/material/Button';
function Home() {
    function cerrarSesion (){
        localStorage.clear()
        alert("Termino todo")
        window.location.href = window.location.href;
        window.location.replace('');
        return 0;
      }


    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>
             Home
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
  