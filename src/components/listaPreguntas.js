import React from 'react'
import '../css/usuario.css'
function listaPreguntas({respuesta,ReadAnswer,clas}){
    return(
        <input 
        type="submit" 
        value={respuesta}
        onClick={ReadAnswer}
        className={clas}
        id="respuesta"
        />
    );
}

export default listaPreguntas;