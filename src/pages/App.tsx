import React, { useState } from 'react';
import Formulario from '../components/form';
import Lista from '../components/list'
import style from './App.module.scss';
import Timer from '../components/timer';
import { ITarefa } from '../types/ITarefa';

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa(){
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            complentado:true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
       <Formulario setTarefas={setTarefas}/>
       <Lista 
          tarefas={tarefas}
          selecionaTarefa={selecionaTarefa}
        />
       <Timer 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
        />
    </div>
  );
}