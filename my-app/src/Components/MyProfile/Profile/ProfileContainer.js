import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Profile from './Profile'
import {GetProfile} from '../../../redux/ProfileReducer'
import { withRouter } from "react-router"

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }

        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {this.props.GetProfile(response.data)})
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

let WithRouterContainer = withRouter(ProfileAPI)


const ProfileContainer = connect(mapStateToProps, {GetProfile})(WithRouterContainer)




export default ProfileContainer;