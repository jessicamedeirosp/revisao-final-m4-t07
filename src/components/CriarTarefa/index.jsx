import { useRef } from "react"
import { useTarefas } from "../../Contexts/tarefaContexto";

export function CriarTarefa() {
    const {tarefas, setTarefas} = useTarefas();
    
    const tarefa = useRef('')

    function adicionarTarefa() {
      const valorInput = tarefa.current.value
      if(!valorInput) return
      setTarefas([...tarefas, valorInput])
    }

    return (
       <>
         <h2>Criar Tarefa</h2>
         <input type="text"  ref={tarefa}/>
         <button onClick={adicionarTarefa}>Adicionar</button>
       </>
    )
}