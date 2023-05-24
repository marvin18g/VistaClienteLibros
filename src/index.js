import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import CreateLibro from './CreateLibro';
import Navii from './Nav';
import ListaLibros from './ListaLibros';
import EditJ from './Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Navii/>
        
    <BrowserRouter>
        <Routes>
        
          <Route path='/create' element={ <CreateLibro/> } />
          <Route path='/lista' element={ <ListaLibros/> } />
          <Route path='/edit/:id' element={<EditJ/>}/>
          

    
        </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
