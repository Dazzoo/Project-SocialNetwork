import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Profile from './Profile'
import {GetProfile} from '../../../redux/ProfileReducer'

class ProfileAPI extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {this.props.GetProfile(response.data)})
    }

    render() {
        debugger
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



const ProfileContainer = connect(mapStateToProps, {GetProfile})(ProfileAPI)




export default ProfileContainer;