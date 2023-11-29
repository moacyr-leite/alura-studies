import Item from "./item";
import style from './list.module.scss'
import { ITarefa } from "../../types/ITarefa";


export default function List({tarefas}:{tarefas: ITarefa[]}) {
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key = {index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
