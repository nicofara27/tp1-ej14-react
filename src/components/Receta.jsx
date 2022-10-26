import { Link } from "react-router-dom";

const Receta = ({ receta }) => {
  const { nombreReceta, imagen, id } = { ...receta };
  return (
    <article className="receta">
      <div>
        <img src={imagen} alt={nombreReceta} />
      </div>
      <h3>{nombreReceta}</h3>
      <Link className="recetaButton" to={`/detalle/${id}`}>
        Ver mas
      </Link>
    </article>
  );
};

export default Receta;
