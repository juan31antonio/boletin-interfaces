import { useState } from 'react';

export default function ContactForm() {
    const [isSent, setIsSent] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    if (isSent) {
      return <h1>¡Gracias por tu mensaje!</h1>;
    }
  
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (name && email) {
            alert(`Mensaje enviado por: ${name} (Correo: ${email})`);
            setIsSent(true);
          } 
          else {
            alert('Por favor, completa ambos campos.');
          }
        }}
      >
        <textarea
          placeholder="Escribe tu nombre"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          placeholder="Escribe tu correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }