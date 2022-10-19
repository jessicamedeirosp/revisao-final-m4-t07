import {  useTarefas } from "../../Contexts/tarefaContexto";

export function ListarTarefa() {
    const {tarefas} = useTarefas();

    return (
       <ul>
        {tarefas.length && tarefas.map(item => (
          <li key={item.id}>{item.tarefa}</li>
        ))}
       </ul>
    )
}