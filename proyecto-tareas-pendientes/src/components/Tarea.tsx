type Props = {
    task: string
    borrarTarea: () => void
}

export const Tarea =({task, borrarTarea}: Props)=> {

  return (
    <div className='task'>
        <span>{task}</span>
        <button onClick={borrarTarea}>Borrar</button>
    </div>
  )
}