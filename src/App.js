import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//IMPORT VIEW
import Home from './view/home';
import Fotos from './view/fotos'
import Videos from './view/videos';
import Pokemones from './view/pokemones';


//IMPORT COMPONENTS
/* import Navbar from './components/navbar/navbar'; */
/* import Inicio from './components/inicio/inicio'; */

//STYLE
import './App.scss';


function App() {
  return (
    <BrowserRouter>
    
{/* 
      <Routes>
        <Route path='inicio/' element={<Inicio />} />
      </Routes> */}
      
      {/* <Routes>
        <Route path='home/' element={<Home />} />
      </Routes> */}
      <Home />
      <Routes>
        <Route path='/pokemones' element={<Pokemones />} />
      </Routes>
      <Routes>
        <Route path='/fotos' element={<Fotos />} />
      </Routes>
      <Routes>
        <Route path='/videos' element={<Videos />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
