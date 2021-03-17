import React from 'react'
import {Follow, Unfollow, SetUsers, ChangePage, SetTotalUsersCount, SetFetching, AddInProgress, RemoveInProgress} from './../../redux/usersReducer'
import {connect} from 'react-redux'
import FindUsers from "./findUsers";
import * as axios from 'axios';
import {UserAPI} from '../../redux/API'


class FindUsersAPI extends React.Component {
    componentDidMount() {
        this.props.SetFetching(true)
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.SetFetching(false)
            this.props.SetUsers(data.items)
            this.props.SetTotalUsersCount(data.totalCount)
        })
    }
    changeCurrentPage = (newCurrentPage) => {
        this.props.SetFetching(true)
        this.props.ChangePage(newCurrentPage)
        UserAPI.getUsers(newCurrentPage, this.props.pageSize).then(data => {
            this.props.SetFetching(false)
            this.props.SetUsers(data.items)
        })
    }

    render(){
        return ( <FindUsers {...this.props} changeCurrentPage={this.changeCurrentPage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        currentPage: state.findUsers.currentPage,
        totalUsersCount: state.findUsers.totalUsersCount,
        isFetching: state.findUsers.isFetching,
        inProgress: state.findUsers.inProgress
    }
}


const FindUsersContainer = connect(mapStateToProps, {Follow, Unfollow, SetUsers, ChangePage, SetTotalUsersCount, SetFetching, AddInProgress, RemoveInProgress})(FindUsersAPI)

export default FindUsersContainer;