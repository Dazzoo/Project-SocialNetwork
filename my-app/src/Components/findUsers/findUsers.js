import React from 'react';
import style from './findUsers.module.css';
import {PreloaderSkateboardForComponent} from '../common/Preloaders/PreloaderSkateboard'
import {NavLink} from "react-router-dom"
import * as axios from 'axios';
import Paginator from './../common/Paginator/Paginator'
import User from './User/User'

const FindUsers = (props) => {
        return (
            <div>

                <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                           currentPage={props.currentPage} ChangeCurrentPage={props.ChangeCurrentPage}  />

                {props.isFetching ? <PreloaderSkateboardForComponent/> : null}
                <div className={style.findUsersWrapper}>
                {props.users.map( u =>
                    <User key={u.id} u={u} props={props} />

                )
                }
                </div>
            </div>
        )
}

export default FindUsers