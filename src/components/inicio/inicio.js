import React from 'react';
import { Link } from 'react-router-dom';

/* IMPORT STYLE */
import './inicio.css';

const Inicio = () => {
    return (
        <>
            {/* SPINNER */}
            <div className="pokemon"></div>
            {/* BUTTON */}
            <a id="ingresar" type="button" data-text="Awesome" className="button">
            <Link className="actual-text" to='/fotos' >&nbsp;Ingresar&nbsp;</Link>
                {/* <span className="actual-text">&nbsp;Ingresar&nbsp;</span> */}
                <span className="hover-text" aria-hidden="true">&nbsp;Ingresar&nbsp;</span>
            </a>
        </>

    );
};

export default Inicio;