import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Usuario from '../components/Usuario';
import Preguntas from '../components/Preguntas';
import Cronometro from '../components/cronometro'
import axios from 'axios'


function Routers() {
 const [count, guardarCount]=useState(0);
 const [bool, guardarBool]=useState(false);
    const [usuario, guardarUsuario] = useState({
        usuario: '',
        categoria: '',
        dificultad: ''
    });
    const [preguntas, guardarPreguntas] = useState();
    const [estado, guardarEstado] = useState(false);
    const [color1, guardarColor1]=useState('respuesta');
    const [color2, guardarColor2]=useState('respuesta');
    const [color3, guardarColor3]=useState('respuesta');
    const [color4, guardarColor4]=useState('respuesta');
    const [ganancias, guardarGanancias]=useState(0);
    const [ejec, guardarEjec]=useState(true);
    const [array, guardarArray]=useState(['']);
    let temp = [];
 
    const guardarDatos = e => {

        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }
    const incrementarContador=(e)=>{
        guardarColor1('respuesta');
        guardarColor2('respuesta');
        guardarColor3('respuesta');
        guardarColor4('respuesta');
        guardarGanancias(ganancias+1000);
        guardarCount(count+1);
        guardarEjec(true);
    }

    const Limpiar = ()=>{
        guardarColor1('respuesta');
        guardarColor2('respuesta');
        guardarColor3('respuesta');
        guardarColor4('respuesta');
        guardarGanancias(0);
        guardarCount(0);
    }
    useEffect(() => {
        if (estado) {
            const consultarPreguntas = async () => {
                let url = `https://opentdb.com/api.php?amount=10&category=${usuario.categoria}&difficulty=${usuario.dificultad}&type=multiple`;
                let result = await axios.get(url);
                guardarPreguntas(result.data.results);
            }
            consultarPreguntas();
            guardarEstado(false);

        }
    }, [estado, usuario]);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => (
                    <Usuario
                        guardarDatos={guardarDatos}
                        guardarEstado={guardarEstado}
                    />
                )}
                />

                { 
                count > 9 ? <h1>Yan o hay más preguntas tu ganancias son: {ganancias}</h1>:

                typeof preguntas !== "undefined" ?
                        <Route exact path="/preguntas" render={() => (
                            <Preguntas
                                usuario={usuario}
                                preguntas={preguntas}
                                count={count}
                                guardarEstado={guardarEstado}
                                incrementarContador={incrementarContador}
                                color1={color1}
                                color2={color2}
                                color3={color3}
                                color4={color4}
                                guardarColor1={guardarColor1}
                                guardarColor2={guardarColor2}
                                guardarColor3={guardarColor3}
                                guardarColor4={guardarColor4}
                                ganancias={ganancias}
                                ejec={ejec}
                                guardarEjec={guardarEjec}
                                temp={temp}
                                array={array}
                                guardarArray={guardarArray}
                                Limpiar={Limpiar}
                                bool={bool}
                                guardarBool={guardarBool}
                            />
                        )}

                        />
                        : null
                        }
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;