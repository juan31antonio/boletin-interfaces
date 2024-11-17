export default function UserCard({usuarios}){
    return (
        <div>
          <ul>
              {usuarios.map(usuario => (
                  <li key={usuario.nombre}>
                      <h1>{usuario.nombre}</h1>
                      <h2>{usuario.edad}</h2>
                      <h3>{usuario.colorPelo}</h3>
                  </li>
              ))}
          </ul>
        </div>
      );
}