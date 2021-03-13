import style from './FetchingIcon.module.css'
import React from 'react'
import Preloader from '../../../assets/FadingLines.gif'


const FetchingIcon = () => {
    return (
        <div className={style.background}>
            <img src={Preloader}/>
        </div>
    )
}

export default FetchingIcon