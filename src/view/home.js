import React from 'react';

/* IMPORT COMPONENTS */
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

/* IMPORT STYLE */
import './home.scss';

const Home = () => {
    return (
        <>
            <Navbar />
            {/* BANNER */}
            <div className='container'>
                <div className="showcase"></div>
            </div>

            {/* TITULO */}
            <h1>PokéInfo</h1>

            {/* CARDS */}
            <div className='container'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "25rem" }}>
                            <img src={"https://cdn.dribbble.com/users/985548/screenshots/3419626/media/5af8161d77499ce8883c5ba74e13f603.gif"} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h3>Blastoise</h3>
                                <p className="card-text">
                                Es un Pokémon de tipo agua introducido en la primera generación. Es la evolución de Wartortle y, a partir de la sexta generación, puede megaevolucionar en Mega-Blastoise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "25rem" }}>
                            <img src={"https://cdn.dribbble.com/users/985548/screenshots/3419640/media/f0f2c122dabd324600b70de1d1108cdf.gif"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Gastly</h3>
                                <p className="card-text">
                                Es un Pokémon tipo fantasma/veneno introducido en la primera generación.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "25rem" }}>
                            <img src={"https://cdn.dribbble.com/users/985548/screenshots/3678278/media/16ce23bfbe3280e75048ebfc6a28ffa7.gif"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Rhydon</h3>
                                <p className="card-text">
                                Es un Pokémon de tipo tierra/roca introducido en la primera generación, y la forma evolucionada de Rhyhorn.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "25rem" }}>
                            <img src={"https://cdn.dribbble.com/users/985548/screenshots/3763441/media/f09704464672072a29dc4294765ae5d2.gif"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Charizard</h3>
                                <p className="card-text">
                                    Es un Pokémon de tipo fuego/volador, introducido en la primera generación. Es la evolución de Charmeleon y, a partir de la sexta generación, puede megaevolucionar en Mega-Charizard X o en Mega-Charizard Y.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "25rem" }}>
                            <img src={"https://cdn.dribbble.com/users/985548/screenshots/3689502/media/a5ad93dd3beb43bb9a127a705b5b321a.gif"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3>Voltorb</h3>
                                <p className="card-text">
                                    Voltorb tiene la forma de una Poké Ball. También se puede observar que cuenta con un par de ojos, característicos del anime, y que lo dotan de una expresión de enfado.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "25rem" }}>
                            <img src={"https://cdn.dribbble.com/users/985548/screenshots/3422690/media/72905e8fd96e9691166ab0219af3872a.gif"} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h3>Kadabra</h3>
                                <p className="card-text">
                                Es un Pokémon de tipo psíquico introducido en la primera generación. Es la forma evolucionada de Abra.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;