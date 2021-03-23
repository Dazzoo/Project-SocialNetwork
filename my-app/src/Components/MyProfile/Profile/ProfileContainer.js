 import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Profile from './Profile'
import {GetProfile, getProfileThunk, getStatusThunk, putStatusThunk} from '../../../redux/ProfileReducer'
import { withRouter } from "react-router"

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    render() {
    return (
        <Profile {...this.props} />
            )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

let WithRouterContainer = withRouter(ProfileClassContainer)


const ProfileContainer = connect(mapStateToProps, {GetProfile, getProfileThunk, getStatusThunk, putStatusThunk})(WithRouterContainer)




export default ProfileContainer;