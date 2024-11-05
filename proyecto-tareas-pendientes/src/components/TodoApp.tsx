import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

type Props = {};

export const TodoApp = (props: Props) => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listaTareas, setListaTareas] = useState<string[]>([]);

  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
    setNuevaTarea("");
  };

  const borrarTarea = (index: number) => {
    setListaTareas((tarea) => tarea.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaTareas
        listaTareas={listaTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </div>
  );
};
