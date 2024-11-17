import { useState } from 'react';

export default function Parent(){

    const [mensaje,setMensaje] = useState("");

    function messageChange(mensaje){
        setMensaje(mensaje)
    }
    
    return(
        <div>
            <Children mensajePadre={"Esto es un mensaje de padre a hijo"} mensajeDeVuelta={messageChange}></Children>   
            <h1>Este es el mensaje que recibe del hijo: {mensaje}</h1>
        </div>
    );
}

function Children({mensajePadre,mensajeDeVuelta}){
    
    function escribirMensaje(){
        mensajeDeVuelta("Mensaje desde el hijo")
    }

    return(
        <div>
            <h1>{mensajePadre}</h1>
            <button onClick={escribirMensaje}>Boton de envio desde el hijo</button>
        </div>
    );
}