import React from 'react'
import {NavLink} from "react-router-dom"
import style from '../findUsers.module.css';
import cn from 'classnames'


const User = ({u, props}) => {
    return (
        <div className={style.userWrapper}>
            <div className={style.inlineBlock}>
                <div className={style.profileImage}>
                    <NavLink className={style.userNav} to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : 'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
                    </NavLink>
                </div>
                <div className={style.FollowUnfollowWrapper} >
                    {u.followed
                        ? <button className={cn("btn btn-outline-danger")} disabled={props.inProgress.some(id => id === u.id)} onClick={() => {
                            props.FollowThunk(u.id)
                        }}>Unfollow</button>
                        : <button className={cn("btn btn-outline-success")} disabled={props.inProgress.some(id => id === u.id)} onClick={() => {
                            props.UnfollowThunk(u.id)
                        }}>Follow</button>
                    }
                </div>
            </div>
            <div className={cn(style.inlineBlock, style.FollowUnfollowWrapper)}>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>
        </div>
    )
}

export default  User