import { useState } from 'react';

export default function ToggleSwitch(){
    const [cambiador,setCambiador] = useState("On");

    function cambiar(){
        cambiador == "On" ? setCambiador("Off"):setCambiador("On")
    }
    
    return(
        <div>
            <h1>{cambiador}</h1>
            <button onClick={cambiar}>Switch</button>
        </div>
    );
}