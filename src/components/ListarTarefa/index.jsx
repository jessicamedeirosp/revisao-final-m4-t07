import { useContext } from "react";
import { TarefasContexto } from "../../Contexts/tarefaContexto";

export function ListarTarefa() {
    const {tarefas} = useContext(TarefasContexto);

    return (
       <ul>
        {tarefas && tarefas.map(item => (
          <li key={item}>{item}</li>
        ))}
       </ul>
    )
}