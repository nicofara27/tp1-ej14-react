

const Receta = ({receta}) => {
  const {nombreReceta, imagen} = {...receta}
    return (
        <article className="receta">
          <div>
            <img
              src={imagen}
              alt={nombreReceta}
            />
          </div>
          <h3>{nombreReceta}</h3>
          <button>Ver mas</button>
        </article>
    );
};

export default Receta;