import React from 'react';
import c from './findUsers.module.css';
import * as axios from 'axios';


class findUsers extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.SetUsers(response.data.items)})
    }
    render() {
        return (
            <div>
                {this.props.users.map( u =>
                <div key={u.id} className={c.wrapper}>
                    <div className={c.inlineBlock}>
                        <div className={c.profileImage}>
                            <img src={u.photos.small != null ? u.photos.small : 'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {this.props.Follow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {this.props.Unfollow(u.id)}}>Follow</button>
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
}


export default findUsers;