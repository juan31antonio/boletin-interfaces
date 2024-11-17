import { useState } from 'react';

export default function Counter(){

    const [contador,setContador] = useState(0);

    function aumentarContador(){
        setContador(contador + 1);
    }

    function disminuirContador(){
        setContador(contador - 1);
    }
    
    return(
        <div>
            <h1>{contador}</h1>  
            <button onClick={aumentarContador}>Aumentar</button>
            <button onClick={disminuirContador}>Disminuir</button>
        </div>
    );
}