import { json } from "react-router-dom";

const URL = process.env.REACT_APP_API_RECETA;

export const crearRecetaApi = async (receta) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultarRecetasApi = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const obtenerRecetaApi = async (id) => {
  try {
    const respuesta = await fetch(URL + "/" + id);
    const receta = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return receta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editarRecetaApi = async (id, receta) => {
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const borrarRecetaApi = async (id) => {
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};
