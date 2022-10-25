import { Link } from "react-router-dom";

const Administrador = () => {
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
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
            {/* aqui tengo que hacer un map  */}
            {
              // opcion 1
              // productos.map((producto)=> {return <ItemProducto key={producto.id} producto={producto}></ItemProducto>} )
              // opcion 2
              // productos.map((producto)=> <ItemProducto key={producto.id} {...producto}></ItemProducto> )
              // opcion 3
              // productos.map((producto)=> <ItemProducto key={producto.id} producto={producto} setProductos={setProductos}></ItemProducto> )
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Administrador;
