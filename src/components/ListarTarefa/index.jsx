import {  useTarefas } from "../../Contexts/tarefaContexto";

export function ListarTarefa() {
  const {tarefas} = useTarefas();

    return (
       <ul>
        {tarefas && tarefas.map(item => (
          <li key={item}>{item}</li>
        ))}
       </ul>
    )
}