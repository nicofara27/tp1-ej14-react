const FormReceta = () => {
  return (
    <div>
      <h1 className="titulo">Subir receta</h1>
      <hr />
      <form>
        <label>
          Receta
          <input type="text" placeholder="Alfajores de maicena" />
        </label>
        <label>
          Imagen
          <input type="text" placeholder="Alfajores de maicena" />
        </label>
        <label>
            Ingredientes
          <textarea
            placeholder=" 1- Primer ingrediente
        2- Segundo ingrediente
        3- Tercer ingrediente"
          />
        </label>
        <label>
          Pasos a seguir
          <textarea placeholder=" 1- Primer paso
        2- Segundo paso
        3- Tercer paso" />
        </label>
        <button className="formButton">Subir</button>
      </form>
    </div>
  );
};

export default FormReceta;
