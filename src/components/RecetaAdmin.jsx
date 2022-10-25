import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarRecetaApi, consultarRecetasApi } from "./helpers/queries";

const RecetaAdmin = ({ receta, setRecetas }) => {
  const { id, nombreReceta, imagen, ingredientes, pasos } = { ...receta };

  //Funciones para recortar el texto de ingredientes y pasos cuando son muy largos
  const ingr = ingredientes;
  let ingr2 = "";
  if (ingr != null && ingr.length > 100) {
    ingr2 = ingr.slice(0, 100) + "...";
  }
  const pasosRecortados = pasos;
  let pasosRecortados2 = "";
  if (pasosRecortados != null && pasosRecortados.length > 100) {
    pasosRecortados2 = pasosRecortados.slice(0, 100) + "...";
  }

  //Funcion para borrar receta
  const borrarReceta= () =>{
    borrarRecetaApi(id).then((respuesta)=>{
        if(respuesta.status === 200) {
            Swal.fire("Receta eliminada","La receta fue eliminada exitosamente", "success");
            consultarRecetasApi().then((respuesta)=>{
                setRecetas(respuesta)
              })
          } else {
            Swal.fire("Ocurrio un error","Vuelva a intentar la operacion mas tarde", "error")
          }
        })
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{nombreReceta}</td>
      <td>{imagen}</td>
      <td>{ingr2}</td>
      <td>{pasosRecortados2}</td>
      <td>
        <div>
          <Link className="btnEditar" to={`/administrar/editar/${id}`}>
            Editar
          </Link>
          <button className="btnBorrar" onClick={borrarReceta}>Borrar</button>
        </div>
      </td>
    </tr>
  );
};

export default RecetaAdmin;
