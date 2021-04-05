    import React from 'react'
import MyProfile from './MyProfile'
import {AddPostActionCreator} from './../../redux/profileReducer'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {TakeProfilePage, TakePosts, TakeAuth, TakeLikedPostsID} from '../../redux/profile-selector'
import withAuthRedirect from './../../hoc/withAuthRedirect'
    import {AddPost, AddLikedPost, RemoveLikedPost} from '../../redux/profileReducer'



class MyProfileClassContainer extends React.Component{
    render(){
        return(
        <MyProfile {...this.props}/>
        )
    }

}


let mapStateToProps = (state) => {
    return {
        ProfilePage: TakeProfilePage(state),
        posts: TakePosts(state),
        isAuth: TakeAuth(state),
        likedPostsID: TakeLikedPostsID(state)
    }
}


export default compose(
    connect(mapStateToProps, {AddPostActionCreator, AddLikedPost, RemoveLikedPost}),
    withAuthRedirect
)(MyProfileClassContainer);