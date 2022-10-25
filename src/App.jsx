
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Administrador from './components/view/Administrador';
import Inicio from './components/view/Inicio';
import SubirReceta from './components/view/SubirReceta';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header> 
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
          <Route exact path='/administrador/subir' element={<SubirReceta></SubirReceta>}></Route>
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
