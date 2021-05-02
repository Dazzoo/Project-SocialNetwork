import React from 'react'
import style from '../MyNews.module.css'

export const News = (props) => {
    return (
        <div className={style.newsWrapper} >

            <div className={style.title}>
                {props.title}
            </div>
            <div className={style.description} >
                {props.abstract}
            <a className={style.sourceUrl} href={props.url}>  Read more...</a>
            </div>
            <div className={style.image} >
                <img src={props.image ? props.image : null} />
            </div>

        </div>
        )

}

export default News