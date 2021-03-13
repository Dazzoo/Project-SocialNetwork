import React from 'react';
import c from './findUsers.module.css';
import FetchingIcon from './FetchingIcon/FetchingIcon'

const FindUsers = (props) => {
        let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return (
            <div>
                {pages.map(p => {return <span className={`${props.currentPage === p && c.activePage} ${c.pagesIcon}`}
                                                onClick={() => {props.changeCurrentPage(p)}}>{p}</span>})}
                {props.isFetching ? <FetchingIcon/> : null}
                {props.users.map( u =>
                    <div key={u.id} className={c.wrapper}>
                        <div className={c.inlineBlock}>
                            <div className={c.profileImage}>
                                <img src={u.photos.small != null ? u.photos.small : 'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {props.Follow(u.id)}}>Unfollow</button>
                                    : <button onClick={() => {props.Unfollow(u.id)}}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={c.inlineBlock}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>
                )
                }
            </div>
        )
}

export default FindUsers