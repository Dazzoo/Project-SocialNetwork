import React from 'react'
import style from '../MyNews.module.css'

export const News = (props) => {
    return (
        <div className={style.newsWrapper} >
            <div className={style.title}>
                {props.title}
            </div>
            <div className={style.description} >
                {props.description}
            </div>
            <div className={style.image} >
                <img src={props.image ? props.image : null} />
            </div>
            <div className={style.sourceUrl}>
                <a className={style.sourceUrl} href={props.url}>Источник...</a>
            </div>
        </div>
        )

}

export default News