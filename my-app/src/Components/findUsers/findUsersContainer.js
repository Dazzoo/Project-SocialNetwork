import React from 'react'
import {Follow, Unfollow, SetUsers, ChangePage, SetTotalUsersCount, SetFetching} from './../../redux/usersReducer'
import {connect} from 'react-redux'
import FindUsers from "./findUsers";
import * as axios from 'axios';


class FindUsersAPI extends React.Component {

    componentDidMount() {
        this.props.SetFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.SetFetching(false)
                this.props.SetUsers(response.data.items)
                this.props.SetTotalUsersCount(response.data.totalCount)})
    }
    changeCurrentPage = (newCurrentPage) => {
        this.props.SetFetching(true)
        this.props.ChangePage(newCurrentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.SetFetching(false)
                this.props.SetUsers(response.data.items)})
    }

    render(){
        return ( <FindUsers totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            changeCurrentPage={this.changeCurrentPage}
                            users={this.props.users}
                            Follow={this.props.Follow}
                            Unfollow={this.props.Unfollow}
                            isFetching={this.props.isFetching}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        currentPage: state.findUsers.currentPage,
        totalUsersCount: state.findUsers.totalUsersCount,
        isFetching: state.findUsers.isFetching
    }
}


const FindUsersContainer = connect(mapStateToProps, {Follow, Unfollow, SetUsers, ChangePage, SetTotalUsersCount, SetFetching})(FindUsersAPI)

export default FindUsersContainer;