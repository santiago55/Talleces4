import React, { Fragment } from 'react';
import '../css/usuario.css'
function Nav({ usuario, ganancias }) {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <ul className="navbar-nav mr-auto">
                        <strong>Nombre: {usuario.usuario}</strong>
                    </ul>
                    <ul className="navbar-nav mr-center">
                        <strong>Dificultad: {usuario.dificultad}</strong>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <strong>Ganancias: {ganancias}$</strong>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Nav;