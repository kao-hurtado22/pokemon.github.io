import React from 'react';

/* IMPORT STYLE */
import VideoPokemon from '';
import './cover.scss';

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={VideoPokemon} autoPlay loop muted />
            <h1 className="cover-h1"></h1>

        </div>
    );
};

export default Cover;