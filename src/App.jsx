
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Administrador from './components/view/Administrador';
import EditarReceta from './components/view/EditarReceta';
import Inicio from './components/view/Inicio';
import RecetaCompleta from './components/view/RecetaCompleta';
import SubirReceta from './components/view/SubirReceta';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header> 
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='/detalle/:id' element={<RecetaCompleta></RecetaCompleta>}></Route>
          <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
          <Route exact path='/administrador/subir' element={<SubirReceta></SubirReceta>}></Route>
          <Route exact path='/administrador/editar/:id' element={<EditarReceta></EditarReceta>}></Route>
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
