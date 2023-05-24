
import './App.css';
import Navii from "./Nav";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import ListaLibros from './ListaLibros';


function App() {

  return (
  <div className="App">
    <Navii/>

<header className="App-header">

<div>
<h1>Listado de Libros</h1>

<ListaLibros/>

    </div>

    </header>
  </div>
  );
  
}
    
export default App;
