import { useState } from 'react';

export default function ToDoList(){

    const [tareas, setTareas] = useState([]);
    const [id, setId] = useState(1);
    let descripcion;

    function addTarea(){
        descripcion = prompt('Add Tarea');
        const tarea = 
        {
            id: id,
            descripcion: descripcion,
            complete: false
        }
        setTareas([...tareas, tarea]);
        setId(id + 1)
    }

    function marcarCompletado(id){
        const nuevasTareas = tareas.map(tarea => 
            tarea.id === id ? { ...tarea, complete: !tarea.complete } : tarea
        );
        setTareas(nuevasTareas);
    }

    function deleteTarea(id){
        const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
        setTareas(nuevasTareas);
    }


    return(
        <div>
            <ul>
                {tareas.map(tarea => (
                    <li key={tarea.id}>
                        <h1>{tarea.descripcion} -- {tarea.complete ? "✔️" : "❌"}</h1>
                        <button onClick={() =>marcarCompletado(tarea.id)}>Marcar como completada</button>
                        <button onClick={() => deleteTarea(tarea.id)}>Delete Tarea</button>
                    </li>
                ))}
            </ul>
            <button onClick={addTarea}>Add tarea</button>
        </div>
    );
}