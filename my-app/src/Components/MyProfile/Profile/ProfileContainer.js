 import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Profile from './Profile'
import {GetProfile, getProfileThunk, getStatusThunk, putStatusThunk} from '../../../redux/profileReducer'
import { withRouter } from "react-router"
import {TakeProfile, TakeStatus} from  '../../../redux/profile-selector'
 import Preloader from '../../findUsers/FetchingIcon/FetchingIcon'

class ProfileClassContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId = 15582
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    render() {
        if(!this.props.profile){
            return (
                <Preloader/>
            )
        }
    return (
        <Profile {...this.props} />
            )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: TakeProfile(state),
        status: TakeStatus(state)
    }
}

let WithRouterContainer = withRouter(ProfileClassContainer)


const ProfileContainer = connect(mapStateToProps, {GetProfile, getProfileThunk, getStatusThunk, putStatusThunk})(WithRouterContainer)




export default ProfileContainer;