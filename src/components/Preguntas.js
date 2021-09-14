import React, { Fragment, useState, useEffect } from 'react';
import Nav from './nav';
import '../css/preguntas.css'
import '../css/usuario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'
import  Cronometro from '../components/cronometro'
function Preguntas(props) {

    
    const {
        temp, usuario, preguntas, count, color1,
        incrementarContador, ganancias,
        ejec, guardarEjec, array, guardarArray, history, color2,
        color3, color4, guardarColor4, guardarColor3, guardarColor2,
        guardarColor1,Limpiar,bool,guardarBool
    } = props;
    let correct = preguntas[count].correct_answer;
    const [num, setNum] = useState(15);

    useEffect(() => {
        if (ejec) {
            const aleto = (e) => {
                let m = [];
                for (let j = 0; j < 3; j++) {
                    let x = preguntas[count].incorrect_answers[j];
                    m.push(x)
                }
                m.push(correct);
                for (let i = 0; i <= 3; i++) {
                    let aleato = Math.floor(Math.random() * (m.length));
                    let seleccion = m[aleato];
                    temp.push(seleccion);
                    m.splice(aleato, 1);
                }
                guardarArray(temp);
            }
            aleto();
            guardarEjec(false);
        }

    }, [ejec, guardarEjec, count, preguntas, temp, correct]);


    const final = ()=>{
        
        alert("Se acabo el tiempo, gracias por jugar");
        window.location.href="/";
    }

    const volerEmpezar = ()=>{
        setNum(15);
    }
    const salir = () => {
        Limpiar();
        history.push('/');
        window.location.reload();
    }
    const ReadAnswer = (e) => {
        e.preventDefault();
        if (e.target.className === "1") {
            array[0] === preguntas[count].correct_answer ? guardarColor1('respuesta-verde')
                : guardarColor1('respuesta-red')
        }

        if (e.target.className === "2") {
            array[1] === preguntas[count].correct_answer ? guardarColor2('respuesta-verde')
                : guardarColor2('respuesta-red')
        }
        if (e.target.className === "3") {
            array[2] === preguntas[count].correct_answer ? guardarColor3('respuesta-verde')
                : guardarColor3('respuesta-red')
        }
        if (e.target.className === "4") {
            array[3] === preguntas[count].correct_answer ? guardarColor4('respuesta-verde')
                : guardarColor4('respuesta-red')
        }
        if (preguntas[count].correct_answer === e.target.value) {
            setTimeout(() => {
                guardarBool(true);
                incrementarContador();
            }, 5000);
        } else {
            setTimeout(() => {
                alert(`Game Over Has ganado ${ganancias}`);
                Limpiar();
                history.push('/');
                window.location.reload();
            }, 2000);

        }
    }
    return (
        <Fragment>
            <Nav
                usuario={usuario}
                ganancias={ganancias}
            />
            <div style={{ fontSize: "2.5em", color: 'red' }}>
                <FontAwesomeIcon
                    icon={faSignOutAlt}
                    onClick={salir}
                />
            </div>

            <div className="wraper">
                <Cronometro
                final={final}
                bool={bool}
                guardarBool={guardarBool}
                num={num}
                setNum={setNum}
                volerEmpezar={volerEmpezar}
                />
                <form className="formulario">
                    <p >{preguntas[count].question}</p>
                    <div>
                        <input
                            type="submit"
                            value={array[0]}
                            onClick={ReadAnswer}
                            id={color1}
                            className="1"
                        />
                        <input
                            type="submit"
                            value={array[1]}
                            id={color2}
                            onClick={ReadAnswer}
                            className="2"
                        />
                        <input
                            type="submit"
                            value={array[2]}
                            id={color3}
                            onClick={ReadAnswer}
                            className="3"
                        />
                        <input
                            type="submit"
                            value={array[3]}
                            id={color4}
                            onClick={ReadAnswer}
                            className="4"
                        />
                    </div>
                </form>
            </div>
        </Fragment>
    );
}
export default withRouter(Preguntas);