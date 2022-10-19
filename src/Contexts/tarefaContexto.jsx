import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { headers } from "../utils/headers";
const TarefasContexto = createContext({})

export function TarefasProvider({children}) {
    const [tarefas, setTarefas] = useState([])

    async function carregarTarefas() {
        try {
            const response = await api.get('/listarTarefa', {
                headers
            });
            setTarefas(response.data)
        } catch (e) {
            alert(e)
        }

    }

    useEffect(() => {
        carregarTarefas()
    }, [])

    return (
        <TarefasContexto.Provider value={{tarefas, setTarefas}}>
            {children}
        </TarefasContexto.Provider>
    )
}
// hook => fornece algo
export function useTarefas()  {
    return useContext(TarefasContexto)
}