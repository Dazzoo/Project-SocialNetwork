 import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Profile from './Profile'
import {GetProfile, getProfileThunk, getStatusThunk, putStatusThunk, savePhoto, SetIsOwner, SetProfileThunk} from '../../../redux/ProfileReducer'
 // @ts-ignore
import { withRouter } from "react-router"
import {TakeProfile, TakeStatus, TakeIs0wner, TakeId} from  '../../../redux/profile-selector'
 import {PreloaderSkateboardForComponent} from '../../common/Preloaders/PreloaderSkateboard'
 import {RootStateType} from '../../../redux/store-redux';
 import {ProfileType, ContactsType, formDataType} from '../../../types/types';
 import {compose} from 'redux';


 type  MapStatePropsType = {
        profile: ProfileType,
        status: string | null,
        isOwner: boolean,
        id: number | number
 }
 type MapDispatchPropsType = {
     GetProfile: (getProfile: ProfileType) => void,
     getProfileThunk:(userId: number) => void,
     getStatusThunk:(userId: number) => void,
     putStatusThunk:(status: string) => void,
     savePhoto:(photoFile: any) => void,
     SetIsOwner: (boolen: boolean) => void,
     SetProfileThunk: (profile: any) => void
 }
 type PropsType = MapStatePropsType & MapDispatchPropsType

class ProfileClassContainer extends React.Component<PropsType> {
        profileConstructor(formData: formDataType): any{
            let profile = {
                photos:{
                    small: this.profile.photos.small,
                    large: this.profile.photos.large
                },
                aboutMe: formData.aboutMe ? formData.aboutMe : (this.props.profile.aboutMe ? this.props.profile.aboutMe : null ) ,
                userId: formData.userId,
                lookingForAJob: formData.lookingForAJob ? formData.lookingForAJob : this.props.profile.lookingForAJob,
                lookingForAJobDescription: formData.lookingForAJobDescription ? formData.lookingForAJobDescription : (this.props.profile.lookingForAJobDescription ? this.props.profile.lookingForAJobDescription : null ) ,
                fullName: formData.fullName ? formData.fullName : this.props.profile.fullName,
                contacts:{
                    github: formData.github? formData.github : this.props.profile.contacts.github,
                    vk: formData.vk? formData.vk : this.props.profile.contacts.vk,
                    facebook: formData.facebook? formData.facebook : this.props.profile.contacts.facebook,
                    instagram: formData.instagram? formData.instagram : this.props.profile.contacts.instagram,
                    twitter: formData.twitter? formData.twitter : this.props.profile.contacts.twitter,
                    website: formData.website? formData.website : this.props.profile.contacts.website,
                    youtube: formData.youtube? formData.youtube : this.props.profile.contacts.youtube,
                    mainLink: formData.mainLink? formData.mainLink : this.profile.contacts.mainLink,
                }
            }
            return profile
        }





    render() {
        if(!this.props.profile){
            return (
                <PreloaderSkateboardForComponent/>
            )
        }
    return (
        <Profile {...this.props} profileConstructor={this.profileConstructor} />
            )
    }

}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: TakeProfile(state),
        status: TakeStatus(state),
        isOwner: TakeIs0wner(state),
        id: TakeId(state)
    }
}

let WithRouterContainer = withRouter(ProfileClassContainer)

const ProfileContainer = connect(mapStateToProps, {GetProfile, getProfileThunk, getStatusThunk, putStatusThunk, savePhoto, SetIsOwner, SetProfileThunk})(WithRouterContainer)




export default compose(withRouter,
    connect(mapStateToProps, {GetProfile, getProfileThunk, getStatusThunk, putStatusThunk, savePhoto, SetIsOwner, SetProfileThunk})
)(WithRouterContainer);