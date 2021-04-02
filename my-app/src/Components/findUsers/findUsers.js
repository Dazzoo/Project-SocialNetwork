import React from 'react';
import c from './findUsers.module.css';
import FetchingIcon from './FetchingIcon/FetchingIcon'
import {NavLink} from "react-router-dom"
import * as axios from 'axios';
import Paginator from './../common/Paginator/Paginator'
import User from './User/User'

const FindUsers = (props) => {
        return (
            <div>

                <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                           currentPage={props.currentPage} ChangeCurrentPage={props.ChangeCurrentPage}  />

                {props.isFetching ? <FetchingIcon/> : null}

                {props.users.map( u =>
                    <User u={u} props={props} />

                )
                }
            </div>
        )
}

export default FindUsers