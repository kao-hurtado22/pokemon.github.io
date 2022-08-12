import React from 'react';

/* IMPORT COMPONENT */
import Carousel from '../components/carousel/carousel.js';

/* IMPORT STYLE */
import './fotos.scss';

const Fotos = () => {
    return (
        <>
            <Carousel />

            {/* CARD */}
            <div className='container'>
                <div className="card-fotos " style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://fondosmil.com/fondo/14762.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">Nombre pokémon</h4>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
};

export default Fotos;