import React from 'react';
import c from './findUsers.module.css';
import * as axios from 'axios';


class findUsers extends React.Component {
componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.SetUsers(response.data.items)
            this.props.SetTotalCount(response.data.totalCount)})
    }
    changeCurrentPage(newCurrentPage){
        this.props.ChangePage(newCurrentPage)
        console.log(this.props.currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.SetUsers(response.data.items)})
    }

    render() {
        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }

        return (
            <div>
                {pages.map(p => {return <span className={`${this.props.currentPage === p && c.activePage} ${c.pagesIcon}`} onClick={() => {this.changeCurrentPage(p)}}>{p}</span>})}
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