import React from "react";
import Item from "./item";
import style from './list.module.scss'

export default function List() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Javacript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'Typescript',
            tempo: '03:00:00'
        }
    ]
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
