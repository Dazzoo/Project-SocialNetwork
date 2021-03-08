import React from 'react'
import findUsers from './findUsers'
import {FollowedAC, UnfollowedAC, SetUsersAC} from './../../redux/usersReducer'
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
    return {
        users: state.findUsers.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userId) => {dispatch(FollowedAC(userId))},
        Unfollow: (userId) => {dispatch(UnfollowedAC(userId))},
        SetUsers: (usersList) => {dispatch(SetUsersAC(usersList))}
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(findUsers)

export default FindUsersContainer;