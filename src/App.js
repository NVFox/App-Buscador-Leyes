import './App.css';
import Inicio from './components/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Inicio />} 
        />
        <Route 
          path='ley/:leyId'
          element={<Inicio />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
