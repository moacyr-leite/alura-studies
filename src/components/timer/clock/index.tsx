import style from './clock.module.scss'

interface Props {
    tempo:number | undefined
}

export default function Clock({tempo = 0}:Props){
    const minutos = Math.floor(tempo/60);
    const segundos = tempo % 60;
    const [minutosDezenas, minutosUnidade] = String(minutos).padStart(2,'0')
    const [segundosDezenas, segundosUnidade] = String(segundos).padStart(2,'0')
    return(
        <>
            <span className={style.relogioNumero}>{minutosDezenas}</span>
            <span className={style.relogioNumero}>{minutosUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundosDezenas}</span>
            <span className={style.relogioNumero}>{segundosUnidade}</span>
        </>
    )
}