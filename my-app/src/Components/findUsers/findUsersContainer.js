import React from 'react'
import {Follow, Unfollow, SetUsers, ChangePage, SetTotalUsersCount, SetFetching, AddInProgress, RemoveInProgress, FollowThunk, UnfollowThunk, GetUsers, ChangeCurrentPage} from './../../redux/usersReducer'
import {connect} from 'react-redux'
import FindUsers from "./findUsers";
import * as axios from 'axios';
import {UserAPI} from '../../redux/API'
import withAuthRedirect from './../../hoc/withAuthRedirect'


class FindUsersAPI extends React.Component {
    componentDidMount() {
        this.props.GetUsers(this.props.currentPage, this.props.pageSize)
        }

    render(){
        return ( <FindUsers {...this.props}/>
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

const withAuth = withAuthRedirect(FindUsersAPI)

const FindUsersContainer = connect(mapStateToProps, {SetUsers, ChangePage, SetTotalUsersCount, SetFetching, FollowThunk, UnfollowThunk, GetUsers, ChangeCurrentPage})(withAuth)

export default FindUsersContainer;