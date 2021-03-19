import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Profile from './Profile'
import {GetProfile, getProfileThunk} from '../../../redux/ProfileReducer'
import { withRouter } from "react-router"

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getProfileThunk(userId)
    }

    render() {
    return (
        <Profile {...this.props} />
            )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithRouterContainer = withRouter(ProfileClassContainer)


const ProfileContainer = connect(mapStateToProps, {GetProfile, getProfileThunk})(WithRouterContainer)




export default ProfileContainer;