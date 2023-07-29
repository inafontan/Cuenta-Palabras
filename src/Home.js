// Home.js
import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Bienvenido a la aplicación de conteo</h1>
            <p>Elige una opción:</p>
            <ul>
                <li>
                    <Link to="/word-counter">Contar Palabras</Link>
                </li>
                <li>
                    <Link to="/letter-counter">Contar Letras</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;