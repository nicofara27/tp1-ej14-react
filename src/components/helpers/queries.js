import { json } from "react-router-dom";

const URL = process.env.REACT_APP_API_RECETA; 

export const crearRecetaApi = async(receta)=>{
    try {
        const respuesta = await fetch(URL,{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(receta)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const consultarRecetasApi = async()=>{
    try {
        console.log("asd")
        const respuesta = await fetch(URL);
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    } catch (error) {
        console.log(error);
        return false
    }
}