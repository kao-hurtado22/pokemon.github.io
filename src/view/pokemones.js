import React from 'react';

/* IMPORT COMPONENT */
import Navbar from '../components/navbar/navbar';


/* IMPORT STYLE */
import './pokemones.scss';

const Pokemones = () => {
    return (
        <>
            <Navbar />
            <h1 className="title">Cuál es tu Pokemón favorito?</h1>
            <a className="home" type="btn" href="./index.html">
                Home
            </a>
            <div className="container-pokemon"></div>
        </>

    );
};

export default Pokemones;

