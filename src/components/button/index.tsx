import React from 'react';
import style from './button.module.scss'

export default class Button extends React.Component < { children: React.ReactNode } >{
    render() {
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}