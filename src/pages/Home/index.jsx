import { useState } from "react";
import { CriarTarefa } from "../../components/CriarTarefa";
import { ListarTarefa } from "../../components/ListarTarefa";
import { TarefasContexto } from "../../Contexts/tarefaContexto";
import './index.css';

export function Home() {
    const [tarefas, setTarefas] = useState([])
    return (
        <TarefasContexto.Provider value={{tarefas, setTarefas}}>
            <main className="conteudo-principal">
                <CriarTarefa/>
                <ListarTarefa/>
            </main>
        </TarefasContexto.Provider>
    )
}