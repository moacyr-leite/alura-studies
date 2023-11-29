import React, { useState } from 'react';
import Formulario from '../components/form';
import Lista from '../components/list'
import style from './App.module.scss';
import Timer from '../components/timer';
import { ITarefa } from '../types/ITarefa';

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  return (
    <div className={style.AppStyle}>
       <Formulario setTarefas={setTarefas}/>
       <Lista tarefas={tarefas}/>
       <Timer/>
    </div>
  );
}