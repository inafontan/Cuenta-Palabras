// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import WordCounter from './WordCounter';
import LetterCounter from './LetterCounter';
 
const App = () => {
    return (
        <Router>
            <div className="App">
                <h1>Bienvenido a la aplicación de conteo</h1>

                <div className='GrupoEnlaces'>
                <Link to="/App" className='enlace'>Inicio</Link>
                <Link to="/word-counter" className='enlace'>Contador de palabras</Link>
                <Link to="/letter-counter" className='enlace'>Contador de letras</Link>
                </div>
                </div>
                 
               <Routes>
                    <Route path="/word-counter"
                        element={<WordCounter/>}/>
                    <Route path="/letter-counter"
                        element={<LetterCounter/>}/>
                </Routes>
            
        </Router>
    );
};

export default App;