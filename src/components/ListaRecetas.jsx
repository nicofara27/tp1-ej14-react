import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { consultarRecetasApi } from "./helpers/queries";
import Receta from "./Receta";

const ListaRecetas = () => {
  let [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultarRecetasApi().then(
      (respuesta) =>{
        setRecetas(respuesta)
      },
      (reason)=>{
        console.log(reason);

        Swal.fire(
          'Ocurrio un error',
          'Intentelo nuevamente en unos minutos',
          'error'
        )
      }
    );
  }, [])
  

  return (
    <div>
        <h1 className="titulo">Lista de recetas</h1>
        <hr />
      <section className="recetasContainer">
        {recetas.map((receta)=><Receta key={receta.id} receta={receta} setRecetas={setRecetas}></Receta>)}
      </section>
    </div>
  );
};

export default ListaRecetas;
