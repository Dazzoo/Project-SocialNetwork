import React from 'react'
import style from './paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, ChangeCurrentPage}) => {
    let pagesCount = Math.ceil (totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {return <span className={`${currentPage === p && style.activePage} ${style.pagesIcon}`}
                                          onClick={() => {ChangeCurrentPage(p, pageSize)}}>{p}</span>})}
        </div>
    )
}

export default Paginator