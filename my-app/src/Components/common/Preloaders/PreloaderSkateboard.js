import style from './PreloaderSkateboard.module.css'
import React from 'react'
import Preloader from '../../../assets/FadingLines.gif'


export const PreloaderSkateboardForComponent = () => {
    return (
        <div className={style.preloaderWrapperForComponent } >
            <img className={style.preloaderForComponent }  src={Preloader}/>
        </div>
    )
}

export const PreloaderSkateboardForWindow = () => {
    return (
        <div className={style.preloaderWrapperForWindow } >
            <img className={style.preloaderForWindow }  src={Preloader}/>
        </div>
    )
}
