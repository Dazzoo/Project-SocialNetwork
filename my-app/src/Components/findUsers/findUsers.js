import React from 'react';
import c from './findUsers.module.css';
import * as axios from 'axios';


const findUsers = (props) => {
            if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {props.SetUsers(response.data.items)});
        }

    debugger

    const UsersShow = props.users.map( u =>
           <div className={c.wrapper}>
                <div className={c.inlineBlock}>
                    <div className={c.profileImage}>
                        <img src={u.photos.small != null ? u.photos.small : 'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.Follow(u.id)}}>Follow</button>
                            : <button onClick={() => {props.Unfollow(u.id)}}>Unfollow</button>
                        }
                    </div>
                </div>
                <div className={c.inlineBlock}>
                    <div>{u.name}</div>
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