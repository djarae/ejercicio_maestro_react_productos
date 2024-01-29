import React, { useState,useEffect } from 'react';import './App.css';import Login from './components/login/Login.js';import Home from './components/home/Home.js';
function App() {
  const [hookUsuarioActivo, setHookUsuarioActivo] = useState(null);
  useEffect(() => {
    console.log((localStorage.getItem("usuarioActivo")))
    if (((localStorage.getItem("usuarioActivo"))===null) 
       ){
         setHookUsuarioActivo("false");
       }else{
        setHookUsuarioActivo("true");
       }
  });    

  return (
    <div className="App">
       {(hookUsuarioActivo=="true") &&
         <Home></Home> 
       }
       {(hookUsuarioActivo=="false") &&
         <Login></Login> 
       }
    </div>
  );
}

export default App;
