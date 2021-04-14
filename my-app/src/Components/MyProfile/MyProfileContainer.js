    import React from 'react'
import MyProfile from './MyProfile'
import {connect} from 'react-redux'
import {compose} from 'redux'
    import {AddPostActionCreator} from './../../redux/profileReducer'
import {TakeProfile, TakePosts, TakeAuth, TakeLikedPostsID, TakeId} from '../../redux/profile-selector'
import withAuthRedirect from './../../hoc/withAuthRedirect'
    import {AddLikedPost, RemoveLikedPost, AddOneLike, RemoveOneLike, GetProfile, getProfileThunk,
        getStatusThunk, putStatusThunk, savePhoto, SetIsOwner, SetProfileThunk} from '../../redux/profileReducer'
    import { withRouter } from "react-router"
import {PreloaderSkateboardForComponent} from '../common/Preloaders/PreloaderSkateboard'




    class MyProfileClassContainer extends React.Component{


    componentDidMount(){
        debugger
        let userId = this.props.match.params.userId
        if(!userId){
                userId = 15582

        }
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


let mapStateToProps = (state) => {
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
    connect(mapStateToProps, {AddPostActionCreator, AddLikedPost, RemoveLikedPost, AddOneLike, RemoveOneLike, GetProfile, getProfileThunk,
        getStatusThunk, putStatusThunk, savePhoto, SetIsOwner, SetProfileThunk}),
    withAuthRedirect
)(MyProfileClassContainer);