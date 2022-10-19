import { createContext, useContext, useState } from "react";

const TarefasContexto = createContext({})

export function TarefasProvider({children}) {
    const [tarefas, setTarefas] = useState([])

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