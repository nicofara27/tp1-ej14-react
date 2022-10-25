import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { consultarRecetasApi } from "../helpers/queries";
import RecetaAdmin from "../RecetaAdmin";

const Administrador = () => {
  let [recetas, setRecetas] = useState([]);
  console.log(recetas)
  useEffect(() => {
    consultarRecetasApi().then(
      (respuesta)=>{
        setRecetas(respuesta);
      }
    )
  }, [])
  

  return (
    <section className="administradorContainer">
      <div>
        <h1 className="titulo">Recetas subidas</h1>
      </div>
      <hr />
        <div className="btnSubirContainer">
        <Link className="btnSubir" to="/administrador/subir">
          Agregar
        </Link>
        </div>
      <div id="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
          { recetas.map((receta)=> <RecetaAdmin key={receta.id} receta={receta} setRecetas={setRecetas}></RecetaAdmin> )
          }
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Administrador;
