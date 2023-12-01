import Item from "./item";
import style from './list.module.scss'
import { ITarefa } from "../../types/ITarefa";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function List({tarefas, selecionaTarefa}: Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa = {selecionaTarefa}
                        key = {item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
