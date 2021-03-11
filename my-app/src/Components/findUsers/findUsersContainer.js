import React from 'react'
import findUsers from './findUsers'
import {FollowedAC, UnfollowedAC, SetUsersAC, ChangePageAC, TotalCountAC} from './../../redux/usersReducer'
import {connect} from 'react-redux'



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

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(findUsers)

export default FindUsersContainer;