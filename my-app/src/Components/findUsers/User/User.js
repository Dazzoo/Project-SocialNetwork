import React from 'react'
import {NavLink} from "react-router-dom"
import style from '../findUsers.module.css';


const User = ({u, props}) => {
    return (
        <div key={u.id} className={style.wrapper}>
            <div className={style.inlineBlock}>
                <div className={style.profileImage}>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : 'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button class="btn btn-outline-danger" disabled={props.inProgress.some(id => id === u.id)} onClick={() => {
                            props.FollowThunk(u.id)
                        }}>Unfollow</button>
                        : <button class="btn btn-outline-success" disabled={props.inProgress.some(id => id === u.id)} onClick={() => {
                            props.UnfollowThunk(u.id)
                        }}>Follow</button>
                    }
                </div>
            </div>
            <div className={style.inlineBlock}>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>
        </div>
    )
}

export default  User