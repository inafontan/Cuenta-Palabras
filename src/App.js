// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import WordCounter from './WordCounter';
import LetterCounter from './LetterCounter';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <div className="App">
                    <Link to="/">Inicio</Link>
                <Routes>
                    <Route path="/"
                        element={<Home/>}/>
                    <Route path="/word-counter"
                        element={<WordCounter/>}/>
                    <Route path="/letter-counter"
                        element={<LetterCounter/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;