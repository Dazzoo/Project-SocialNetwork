import React from 'react'
import {FollowedAC, UnfollowedAC, SetUsersAC, ChangePageAC, TotalCountAC} from './../../redux/usersReducer'
import {connect} from 'react-redux'
import FindUsers from "./findUsers";
import * as axios from 'axios';


class FindUsersAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.SetUsers(response.data.items)
                this.props.SetTotalCount(response.data.totalCount)})
    }
    changeCurrentPage = (newCurrentPage) => {
        this.props.ChangePage(newCurrentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.SetUsers(response.data.items)})
    }

    render(){
        return ( <FindUsers totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            changeCurrentPage={this.changeCurrentPage}
                            users={this.props.users}
                            Follow={this.props.Follow}
                            Unfollow={this.props.Unfollow}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        currentPage: state.findUsers.currentPage,
        totalUsersCount: state.findUsers.totalUsersCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userId) => {dispatch(FollowedAC(userId))},
        Unfollow: (userId) => {dispatch(UnfollowedAC(userId))},
        SetUsers: (usersList) => {dispatch(SetUsersAC(usersList))},
        ChangePage: (newCurrentPage) => {dispatch(ChangePageAC(newCurrentPage))},
        SetTotalCount: (totalUsers) => {dispatch(TotalCountAC(totalUsers))}
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPI)

export default FindUsersContainer;