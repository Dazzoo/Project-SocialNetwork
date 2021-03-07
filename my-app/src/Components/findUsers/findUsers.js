import React from 'react';
import c from './findUsers.module.css'


const findUsers = (props) => {



    const UsersShow = props.users.map( u =>
           <div className={c.wrapper}>
                <div className={c.inlineBlock}>
                    <div className={c.profileImage}>
                        <img src={u.avatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.Follow(u.id)}}>Follow</button>
                            : <button onClick={() => {props.Unfollow(u.id)}}>Unfollow</button>
                        }
                    </div>
                </div>
                <div className={c.inlineBlock}>
                    <div>{u.userName}</div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                    <div>{u.status}</div>
                </div>
            </div>

    )

    return (
        <div>
            {UsersShow}
        </div>
    );
}


export default findUsers;