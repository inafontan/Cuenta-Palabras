// LetterCounter.js
import React, {useState} from 'react';

const LetterCounter = () => {
    const [text, setText] = useState('');
    const letterCount = text.trim().replace(/\s/g, '').length;

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className='palabras'>
            <h1>Contador de Letras</h1>
            <textarea placeholder="Escribe o pega tu texto aquí..."
                value={text}
                onChange={handleChange}/>
            <p className='total'>Total de letras: {letterCount}</p>
        </div>
    );
};

export default LetterCounter;

