import style from './PreloaderThreeDots.module.css'
import React from 'react'
import ThreeDots from '../../../assets/ThreeDots.gif'


export const PreloaderThreeDots = () => {
    return (
        <div className={style.ThreeDotsWrapper}  >
            <img className={style.ThreeDots}  src={ThreeDots}/>
        </div>
    )
}