import React, { useState, useEffect } from 'react'
import style from './paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, ChangeCurrentPage}) => {

    const [PortionSize, setPortionSize] = useState(15)

    useEffect(() => {
        if(document.documentElement.clientWidth < 767){
            setPortionSize(6)
        }
        else{
            setPortionSize(15)
        }
    },[document.documentElement.clientWidth])

    let pagesCount = Math.ceil (totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
    let PositionCount = (pagesCount / PortionSize)
    const [PositionNumber, setCurrentPageArea] = useState(1)
    let leftAreaBorder = (PositionNumber - 1) * PortionSize + 1
    let rightAreaBorder = (PositionNumber * PortionSize)

    return (
        <div className={style.paginatorWrapper}>
            { PositionNumber > 1 && <button class="btn btn-outline-primary" onClick={() => {setCurrentPageArea(PositionNumber - 1)}} >Pre</button> }

            {pages.filter(pos => pos >= leftAreaBorder && pos < rightAreaBorder)
                .map(p => {return <span className={`${currentPage === p && style.activePage} ${"btn btn-primary"}`}
                                          onClick={() => {ChangeCurrentPage(p, pageSize)}}>{p}</span>})}

            { PositionNumber < PositionCount && <button class="btn btn-outline-primary" onClick={() => {setCurrentPageArea(PositionNumber + 1)}} >Next</button> }
        </div>
    )
}

export default Paginator