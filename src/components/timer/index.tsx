import Button from "../button"
import  Clock  from "./clock"
import style from './timer.module.scss'
import { tempoParaSegundos } from "../../common/utils/timer"
import { ITarefa } from "../../types/ITarefa"
import { useEffect, useState } from "react"

interface Props {
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
}

export default function Timer({selecionado, finalizarTarefa} : Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
        finalizarTarefa()
    },[selecionado])

    function regressiva (contador:number = 0) {
        setTimeout(( ) => {
            if(contador>0){
                setTempo(contador - 1);
                return regressiva(contador - 1)
            }
        }, 1000)
    }
    
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock tempo={tempo}/>
            </div>
            <Button onClick={() => regressiva(tempo)}>
                Começar!
            </Button>            
        </div>
    )
}