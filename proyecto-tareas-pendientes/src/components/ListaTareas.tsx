import { Tarea } from "./Tarea";

type Props = {
    listaTareas: string[];
    borrarTarea: (index:number) => void;
}

export const ListaTareas = ({listaTareas, borrarTarea}: Props) => {
  return (
    <div className="taskList">
      {listaTareas.map((task, index) =>(
      
      <Tarea key= {index} task={task} borrarTarea={()=>borrarTarea(index)}></Tarea>

      )
      )}
    </div>
  )
}