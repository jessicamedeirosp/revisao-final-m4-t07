import { useRef } from "react"
import { useTarefas } from "../../Contexts/tarefaContexto";
import api from "../../services/api";
import { headers } from "../../utils/headers";

export function CriarTarefa() {
    const {tarefas, setTarefas} = useTarefas();
    
    const tarefa = useRef('')

    async function adicionarTarefa() {
      try {
        const valorInput = tarefa.current.value
        if(!valorInput) return

     
        const novaTarefa = {
            tarefa: valorInput,
            ativo: false
        }
        console.log(novaTarefa)
        const resposta = await api.post('/cadastrarTarefa', novaTarefa, {
            headers
        });

        setTarefas([...tarefas, resposta.data])   

      } catch (e) {
         alert(e)
      }
    
    }

    return (
       <>
         <h2>Criar Tarefa</h2>
         <input type="text"  ref={tarefa}/>
         <button onClick={adicionarTarefa}>Adicionar</button>
       </>
    )
}