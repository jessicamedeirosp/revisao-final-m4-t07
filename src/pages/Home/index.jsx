
import { CriarTarefa } from "../../components/CriarTarefa";
import { ListarTarefa } from "../../components/ListarTarefa";
import { TarefasProvider } from "../../Contexts/tarefaContexto";
import './index.css';

export function Home() {
    
    return (
      <TarefasProvider>
            <main className="conteudo-principal">
                <CriarTarefa/>
                <ListarTarefa/>
            </main>
      </TarefasProvider>
       
    )
}