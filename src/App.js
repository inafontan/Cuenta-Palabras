import React, {useState} from 'react';
import './App.css';

function App() {
    const [text, setText] = useState('');
    const wordCount = text.trim().split(/\s+/).length;

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="App">
            <h1>Word Counter App</h1>
            <textarea placeholder="Escribe o pega tu texto aquí..."
                value={text}
                onChange={handleChange}/>
            <p>Total de palabras: {wordCount}</p>
        </div>
    );
}

export default App;