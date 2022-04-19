import './App.css';
import Inicio from './components/pages/inicio/Inicio';
import Resultados from './components/pages/resultados/Resultados';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Articulos from './components/pages/articulos/Articulos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Inicio />} 
        />
        <Route
          path='articulos/:inputArr'
          element={<Resultados />} 
        />
        <Route 
          path='ley/:leyId'
          element={<Articulos />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
