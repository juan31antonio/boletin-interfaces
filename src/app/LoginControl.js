import { useState } from 'react';

export default function LoginControl(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    function changeMode(){
        setIsAuthenticated(!isAuthenticated)
    }

    return(
        <div>
            <button onClick={changeMode}>
                {isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión'}
            </button>
        </div>
    );
}