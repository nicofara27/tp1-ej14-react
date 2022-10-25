import { Link } from "react-router-dom";

const RecetaAdmin = ({ receta }) => {
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
          <button className="btnBorrar">Borrar</button>
        </div>
      </td>
    </tr>
  );
};

export default RecetaAdmin;
