
export function ListarTarefa({tarefas}) {
    return (
       <ul>
        {tarefas && tarefas.map(item => (
          <li key={item}>{item}</li>
        ))}
       </ul>
    )
}