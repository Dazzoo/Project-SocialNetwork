import React from 'react'
import MyProfile from './MyProfile'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {AddPostActionCreator} from './../../redux/ProfileReducer'
import {TakeProfile, TakePosts, TakeAuth, TakeLikedPostsID, TakeId} from '../../redux/profile-selector'
import withAuthRedirect from './../../hoc/withAuthRedirect'
import {AddLikedPost, RemoveLikedPost, AddOneLike, RemoveOneLike, GetProfile, getProfileThunk,
        getStatusThunk, putStatusThunk, savePhoto, SetIsOwner, SetProfileThunk} from '../../redux/ProfileReducer'
// @ts-ignore
import { withRouter } from "react-router"
import {PreloaderSkateboardForComponent} from '../common/Preloaders/PreloaderSkateboard'
import {ProfileType, PostType} from '../../types/types'
import {RootStateType} from '../../redux/store-redux'


type MapStatePropsType = {
    ProfilePage: null | ProfileType,
    posts: Array<PostType>,
    isAuth: boolean,
    likedPostsID: Array<number>,
    id: number | null
}
type MapDispatchPropsType = {
    AddPostActionCreator: (text: string) => void,
    AddLikedPost: (id: number) => void,
    RemoveLikedPost: (id: number) => void,
    AddOneLike: (id: number) => void,
    RemoveOneLike: (id: number) => void,
    GetProfile: (getProfile: ProfileType) => void,
    getProfileThunk:(userId: number) => void,
    getStatusThunk:(userId: number) => void,
    putStatusThunk:(status: string) => void,
    savePhoto:(photoFile: any) => void,
    SetIsOwner: (boolen: boolean) => void,
    SetProfileThunk: (profile: any) => void
}
type OwnPropsType = {
}
export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class MyProfileClassContainer extends React.Component<PropsType>{


    componentDidMount(){
        // @ts-ignore
        let userId = Number(this.props.match.params.userId)
        if(!userId){
                userId = 15582

        }
        // @ts-ignore
        if(userId === ":userId"){
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
    render(){

        if(!this.props.ProfilePage){
            return (
                <PreloaderSkateboardForComponent/>
            )
        }

        return(
        <MyProfile {...this.props}/>
        )
    }

}


let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        ProfilePage: TakeProfile(state),
        posts: TakePosts(state),
        isAuth: TakeAuth(state),
        likedPostsID: TakeLikedPostsID(state),
        id: TakeId(state)
    }
}


export default compose(
    withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, RootStateType>(mapStateToProps, {AddPostActionCreator, AddLikedPost, RemoveLikedPost, AddOneLike, RemoveOneLike, GetProfile, getProfileThunk,
        getStatusThunk, putStatusThunk, savePhoto, SetIsOwner, SetProfileThunk}),
    withAuthRedirect
)(MyProfileClassContainer);