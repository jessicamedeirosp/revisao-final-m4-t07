import { useState } from "react";
import { CriarTarefa } from "../../components/CriarTarefa";
import { ListarTarefa } from "../../components/ListarTarefa";
import './index.css';

export function Home() {
    const [tarefas, setTarefas] = useState([])
    return (
        <main className="conteudo-principal">
            <CriarTarefa tarefas={tarefas} setTarefas={setTarefas}/>
            <ListarTarefa tarefas={tarefas} />
        </main>
    )
}