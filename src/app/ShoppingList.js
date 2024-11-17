import { useState } from 'react';

export default function ShoppingList({productos}) {
    const [productosStateList, setProductos] = useState(productos);

    function deleteProduct(nombre){
        const nuevosProductos = productosStateList.filter(producto =>producto.nombre !== nombre);
        setProductos(nuevosProductos);
    }
    
    return (
      <div>
        <ul>
            {productosStateList.map(producto => (
                <li key={producto.nombre}>
                    <h3>Nombre: {producto.nombre}</h3>
                    <h3>Precio: {producto.precio}</h3>
                    <h3>descripcion: {producto.descripcion}</h3>
                    <button onClick={() => deleteProduct(producto.nombre)}>Delete Product</button>
                </li>
            ))}
        </ul>
      </div>
    );
}