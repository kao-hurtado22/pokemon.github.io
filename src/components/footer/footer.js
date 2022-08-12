import React from 'react';

/* IMPORT STYLE */
import './footer.scss';

/* IMPORT REACT-ICON */
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <footer className="container-footer">
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="footer-info">
                            <h3>The Pokémon Company</h3>
                            <div className="list text-white">
                                <p>- Pokeémon Sitio Prensa</p>
                                <p>- Servicio al Cliente</p>
                                <p>- Sobre nuestra compañia</p>
                                <p>- Seleccionar país o Región</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="footer-info">
                            <h3>Redes Sociales</h3>
                                <p className='iconos'>
                                    <FaFacebookSquare />
                                    <FaTwitterSquare />
                                    <AiFillInstagram />
                                    <AiFillYoutube/>
                                </p>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3'>
                    <img src="https://images.wikidexcdn.net/mwuploads/esssbwiki/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png" alt="" width="300" height="125" />

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;