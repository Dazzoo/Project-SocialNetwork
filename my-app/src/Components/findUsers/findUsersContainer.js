import React from 'react'
import findUsers from './findUsers'
import {FollowedAC, UnfollowedAC} from './../../redux/usersReducer'
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
    return {
        users: state.findUsers.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userId) => {dispatch(FollowedAC(userId))},
        Unfollow: (userId) => {dispatch(UnfollowedAC(userId))}
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(findUsers)

export default FindUsersContainer;