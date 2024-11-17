import Product from "./Product"

export default function ProductList() {

const productos = 
[
    {
        nombre: 'Platano',
        precio: 21,
        descripcion: 'Es un platano'
    },
    {
        nombre: 'Naranja',
        precio: 22,
        descripcion: 'Es una naranja'
    },
    {
        nombre: 'Fresa',
        precio: 23,
        descripcion: 'Es una fresa'
    }
]
    




    return (
      <div>
        <ul>
            {productos.map(producto => (
                <li key={producto.nombre}>
                    <Product nombre={producto.nombre} precio={producto.precio} descripcion={producto.descripcion}></Product>
                </li>
            ))}
        </ul>
      </div>
    );
}