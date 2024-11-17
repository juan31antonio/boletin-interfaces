export default function Product({nombre, precio, descripcion}) {
    return (
      <div>
        <h1>{nombre}</h1>
        <h2>{precio}</h2>
        <p>{descripcion}</p>
      </div>
    );
}