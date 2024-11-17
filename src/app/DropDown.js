export default function ShoppingList({opciones}) {
    return(
        <select>
            {opciones.map(option => (
                <option>
                    {option}
                </option>
            ))}
        </select>
    )
}