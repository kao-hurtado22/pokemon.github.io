import React from 'react';
import { Link } from 'react-router-dom';

/* IMPORT STYLE */
/* import Pokemon from './public/media/Logo-Pokemon.png'; */
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="" width="100" height="100" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id='item' className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to='/pokemones' >Pokemones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to='/fotos' >Fotos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to='/videos' >Videos</Link>
            </li>
          </ul>
          <a className='poke-img'>
          <img className='charmander' src="https://c.tenor.com/0WkmuOC_W00AAAAi/waving-pikachu.gif" alt="" width="85" height="68" />
            <img className='charmander' src="https://www.pngmart.com/files/13/Charmander-PNG-HD.png" alt="" width="65" height="68" />
            <img className='bulbasaur' src="https://www.pngmart.com/files/11/Bulbasaur-PNG-Transparent-Image.png" alt="" width="68" height="68" />
            <img className='squirtle' src="https://www.pngplay.com/wp-content/uploads/12/Squirtle-Pokemon-Download-Free-PNG-Clip-Art.png" alt="" width="65" height="70" />

          </a>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>

  );
};

export default Navbar;