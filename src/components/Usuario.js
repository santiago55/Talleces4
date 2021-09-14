import React from 'react';
import { withRouter } from 'react-router-dom'
import '../css/usuario.css'

function Usuario({guardarDatos, history, guardarEstado}) {

    const OnClick =(e)=>{
        e.preventDefault();
        guardarEstado(true);
        history.replace("./preguntas");
    }
   
    return (
        
        <div className="wraper">
            <form
            className="formulario"
            >
                <label>Usuario</label>
                <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    onChange={guardarDatos}
                    placeholder="Ingrese su nombre de usuario"
                    required
                />
                <label>Categoria</label>
                <select
                    id="categoria"
                    name="categoria"
                    onChange={guardarDatos}
                    required
                >
                    <option>Seleccione una categoria</option>
                    <option value="21">Deportes</option>
                    <option value="10">libros</option>
                    <option value="20">Mitología</option>
                    <option value="15">videojuegos</option>
                    <option value="9">Conocimientos generales</option>    
                </select>
                <label>Dificultad</label>
                <select
                    name="dificultad"
                    id="dificultad"
                    onChange={guardarDatos}
                    required
                >
                    <option>Seleccione una dificultad</option>
                    <option value="easy">Facil</option>
                    <option value="medium">Medio</option>
                    <option value="hard">Dificil</option>
                </select>
                <input 
                type="submit" 
                value="Ingresar" 
                id="ingresar"
                className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
                onClick={OnClick}
                required
                />
            </form>
        </div >
    );

}
//export {Usuario};
export default withRouter(Usuario);