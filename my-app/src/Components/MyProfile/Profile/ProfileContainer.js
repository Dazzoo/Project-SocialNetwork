 import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Profile from './Profile'
import {GetProfile, getProfileThunk, getStatusThunk, putStatusThunk, savePhoto, SetIsOwner, SetProfileThunk} from '../../../redux/profileReducer'
import { withRouter } from "react-router"
import {TakeProfile, TakeStatus, TakeIs0wner, TakeId} from  '../../../redux/profile-selector'
 import Preloader from '../../findUsers/FetchingIcon/FetchingIcon'

class ProfileClassContainer extends React.Component {

    profileConstructor(formData){
        let profile = {
            photos:{
                small: this.profile.photos.small,
                large: this.profile.photos.large
            },
            aboutMe: formData.aboutMe ? formData.aboutMe : (this.profile.aboutMe ? this.profile.aboutMe : null ) ,
            userId: formData.userId,
            lookingForAJob: formData.lookingForAJob ? formData.lookingForAJob : this.profile.lookingForAJob,
            lookingForAJobDescription: formData.lookingForAJobDescription ? formData.lookingForAJobDescription : (this.profile.lookingForAJobDescription ? this.profile.lookingForAJobDescription : null ) ,
            fullName: formData.fullName ? formData.fullName : this.profile.fullName,
            contacts:{
                github: formData.github? formData.github : this.profile.contacts.github,
                vk: formData.vk? formData.vk : this.profile.contacts.vk,
                facebook: formData.facebook? formData.facebook : this.profile.contacts.facebook,
                instagram: formData.instagram? formData.instagram : this.profile.contacts.instagram,
                twitter: formData.twitter? formData.twitter : this.profile.contacts.twitter,
                website: formData.website? formData.website : this.profile.contacts.website,
                youtube: formData.youtube? formData.youtube : this.profile.contacts.youtube,
                mainLink: formData.mainLink? formData.mainLink : this.profile.contacts.mainLink,
            }
        }
        return profile
    }


    // не ререндериться страница при обновлении инфы профиля
    // lookingForAJobDescription, aboutMe is required


    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 15582
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
        if(userId == this.props.id){
            this.props.SetIsOwner(true)
        }
        else{
            this.props.SetIsOwner(false)
        }



    }

    render() {
        if(!this.props.profile){
            return (
                <Preloader/>
            )
        }
    return (
        <Profile {...this.props} profileConstructor={this.profileConstructor} />
            )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: TakeProfile(state),
        status: TakeStatus(state),
        isOwner: TakeIs0wner(state),
        id: TakeId(state)
    }
}

let WithRouterContainer = withRouter(ProfileClassContainer)


const ProfileContainer = connect(mapStateToProps, {GetProfile, getProfileThunk, getStatusThunk, putStatusThunk, savePhoto, SetIsOwner, SetProfileThunk})(WithRouterContainer)




export default ProfileContainer;