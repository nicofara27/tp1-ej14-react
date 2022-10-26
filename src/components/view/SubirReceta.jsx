import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { crearRecetaApi } from "../helpers/queries";

const SubirReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    crearRecetaApi(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Receta creada",
          "La receta fue creada exitosamente",
          "success"
        );
        reset();
        navegacion("/administrador");
      } else {
        Swal.fire("Ocurrio un error", "La receta no pudo ser creada", "error");
      }
    });
  };

  return (
    <main>
      <h1 className="titulo">Subir receta</h1>
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
          <p>{errors.nombreReceta?.message}</p>
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
          <p>{errors.imagen?.message}</p>
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
          <p>{errors.ingredientes?.message}</p>
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
          <p>{errors.pasos?.message}</p>
        </label>
        <button className="formButton">Subir</button>
      </form>
    </main>
  );
};

export default SubirReceta;
