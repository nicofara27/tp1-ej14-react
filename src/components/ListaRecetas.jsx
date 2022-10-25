import Receta from "./Receta";

const ListaRecetas = () => {
  return (
    <div>
        <h1 className="titulo">Lista de recetas</h1>
        <hr />
      <section className="recetasContainer">
        <Receta></Receta>
        <Receta></Receta>
        <Receta></Receta>
        <Receta></Receta>
      </section>
    </div>
  );
};

export default ListaRecetas;
