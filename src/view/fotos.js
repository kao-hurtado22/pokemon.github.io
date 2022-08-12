import React from 'react';

/* IMPORT COMPONENT */
import Carousel from '../components/carousel/carousel.js';

/* IMPORT STYLE */
import './fotos.scss';

const Fotos = () => {
    return (
        <>
            <Carousel />
            <header className="showcase">
                <h2 className="">Big New Today</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat,
                    veniam quis fugiat illo, ipsa commodi totam inventore ea architecto, dicta
                    repudiandae ipsam soluta necessitatibus ex facilis voluptatibus quaerat
                    autem!
                </p>
                <a className="btn" href="">
                    Read More <i className="fas fa-angle-double-right" />
                </a>
            </header>

            <div className='container'>
                <div className="card " style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
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