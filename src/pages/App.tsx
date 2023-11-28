import React from 'react';
import Formulario from '../components/form';
import Lista from '../components/list'
import style from './App.module.scss';
import Timer from '../components/timer';

export default function App() {
  return (
    <div className={style.AppStyle}>
       <Formulario/>
       <Lista/>
       <Timer/>
    </div>
  );
}