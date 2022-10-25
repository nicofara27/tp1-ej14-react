import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { crearRecetaApi } from "./helpers/queries";

const FormReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    console.log(datos);
    //Enviar la peticion a la API
    crearRecetaApi(datos).then((respuesta)=> {
      console.log(respuesta)
      //Si la respuesta es correcta indicarle al usuario
      if(respuesta.status === 201) {
        Swal.fire("Receta creado","La receta fue creada exitosamente", "success")
        //Resetear el formulario
        reset();
        //Redireccionar
        navegacion('/administrar')
      } else {
        Swal.fire("Ocurrio un error","La receta no pudo ser creada", "error")
      }
    })
  };

  return (
    <div>
      <h1 className="titulo">Subir receta</h1>
      <hr />
      <form>
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
            {...register("ingredientes", {
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
        <button className="formButton">Subir</button>
      </form>
    </div>
  );
};

export default FormReceta;
