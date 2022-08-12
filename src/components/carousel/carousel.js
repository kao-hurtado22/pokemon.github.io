import React from 'react';

/* IMPORT STYLE */
import './carousel.scss';

const Carousel = () => {
    return (
        <div className='container mt-5 mb-4'>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="true"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                     <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={3}
                        aria-label="Slide 4"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://fondosmil.com/fondo/14720.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images5.alphacoders.com/614/614955.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://fondosmil.com/fondo/14709.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://fondosmil.com/fondo/14729.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
        </div>
    );
};

export default Carousel;