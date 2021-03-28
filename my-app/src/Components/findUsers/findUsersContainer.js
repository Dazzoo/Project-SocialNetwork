import React from 'react'
import {Follow, Unfollow, SetUsers, ChangePage, SetTotalUsersCount, SetFetching, AddInProgress, RemoveInProgress, FollowThunk, UnfollowThunk, GetUsers, ChangeCurrentPage} from './../../redux/usersReducer'
import {connect} from 'react-redux'
import FindUsers from "./findUsers";
import * as axios from 'axios';
import {UserAPI} from '../../redux/API'
import withAuthRedirect from './../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {TakeUsers, TakePageSize, TakeCurrentPage, TakeTotalUsersCount, TakeIsFetching, TakeInProgress} from './../../redux/users-selector'


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
        users: TakeUsers(state),
        pageSize: TakePageSize(state),
        currentPage: TakePageSize(state),
        totalUsersCount: TakeTotalUsersCount(state),
        isFetching: TakeIsFetching(state),
        inProgress: TakeInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {SetUsers, ChangePage, SetTotalUsersCount, SetFetching, FollowThunk, UnfollowThunk, GetUsers, ChangeCurrentPage}),
    withAuthRedirect
)(FindUsersAPI);