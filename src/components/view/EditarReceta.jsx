import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { consultarRcecetaApi, crearRecetaApi, editarRecetaApi, obtenerRecetaApi } from "../helpers/queries";
import { useEffect } from "react";

const EditarReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { id } = useParams();

  const navegacion = useNavigate();

  useEffect(()=>{
    obtenerRecetaApi(id).then((respuesta)=>{
      if(respuesta.status === 200){
        console.log(respuesta.status)
        setValue('nombreReceta', respuesta.dato.nombreReceta)
        setValue('imagen', respuesta.dato.imagen)
        setValue('ingredientes', respuesta.dato.ingredientes)
        setValue('pasos', respuesta.dato.pasos)
      }
    })
  },[]);

  const onSubmit = (datos) => {
    
    //Enviar la peticion a la API
    editarRecetaApi(id, datos).then((respuesta) => {
        console.log(respuesta.id)
      //Si la respuesta es correcta indicarle al usuario
      if (respuesta.status === 200) {
        Swal.fire(
          "Receta editada",
          "La receta fue actualizada exitosamente",
          "success"
        );
        //Redireccionar
        navegacion("/administrador");
      } else {
        console.log(respuesta)
        Swal.fire("Ocurrio un error", "La receta no pudo ser editada", "error");
      }
    });
  };

  return (
    <main>
      <h1 className="titulo">Editar receta</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Receta
          <input
            type="text"
            placeholder="Alfajores de maicena"
            minLength={6}
            maxLength={60}
            {...register("nombreReceta", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 6,
                message: "La cantidad minima de caracteres es 2",
              },
              maxLength: {
                value: 60,
                message: "La cantidad maxima de caracteres es 50",
              },
            })}
          />
        </label>
        <label>
          Imagen
          <input
            type="text"
            placeholder="https://kamadoargentino.com.ar/wp-content/uploads/2020/12/PULLED_PORK_LA_RECETA_INFALIBLE-scaled-1.jpg"
            {...register("imagen", {
              required: "La URL de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
        </label>
        <label>
          Ingredientes
          <textarea
            placeholder=" 1- Primer ingrediente
          2- Segundo ingrediente
          3- Tercer ingrediente"
            minLength={10}
            maxLength={200}
            {...register("ingredientes", {
              required: "Los ingredientes son obligatorios",
              minLength: {
                value: 10,
                message: "La cantidad minima de caracteres es 10",
              },
              maxLength: {
                value: 200,
                message: "La cantidad maxima de caracteres es 200",
              },
            })}
          />
        </label>
        <label>
          Pasos a seguir
          <textarea
            placeholder=" 1- Primer paso
          2- Segundo paso
          3- Tercer paso"
            minLength={20}
            maxLength={1500}
            {...register("pasos", {
              required: "Los pasos son obligatorios",
              minLength: {
                value: 20,
                message: "La cantidad minima de caracteres es 20",
              },
              maxLength: {
                value: 1500,
                message: "La cantidad maxima de caracteres es 1500",
              },
            })}
          />
        </label>
        <button className="formButton">Guardar</button>
      </form>
    </main>
  );
};

export default EditarReceta;