import React, {useState} from 'react';
import './App.css';

function App() {
    const [text, setText] = useState('');
    const wordCount = text.trim().split(/\s+/).length;

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className='palabras'>
            <h1>Contador de Palabras</h1>
            <textarea placeholder="Escribe o pega tu texto aquí..."
                value={text}
                onChange={handleChange}/>
            <p className='total'>Total de palabras: {wordCount}</p>
        </div>
    );
}

export default App;

