import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerRecetaApi } from "../helpers/queries";

const RecetaCompleta = () => {
    const [receta, setReceta] = useState([]);
    const {id} = useParams()

    useEffect(() => {
      obtenerRecetaApi(id).then((respuesta)=>{
        console.log(respuesta.dato)
        if(respuesta.status === 200) {
            setReceta(respuesta.dato)
            console.log(receta);
        }
      })
    }, []);
    

    return (
        <main>
            <h1 className="titulo">{receta.nombreReceta}</h1>
            <hr />
            <section className="detalleContainer">
                <article className="detalleImg">
                    <img src={receta.imagen} alt={receta.nombreReceta} />
                </article>
                <article className="detalleReceta">
                    <h2>Ingredientes</h2>
                    <p>{receta.ingredientes}</p>
                    <h2>Pasos a seguir</h2>
                    <p>{receta.pasos}</p>
                </article>
            </section>
        </main>
    );
};

export default RecetaCompleta;