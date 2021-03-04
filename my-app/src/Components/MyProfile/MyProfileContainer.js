import React from 'react'
import MyProfile from './MyProfile'
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from './../../redux/ProfileReducer'
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
    return {
        ProfilePage: state.profilePage.PostsPage,
        newPostText: state.profilePage.PostsPage.textArea,
        posts: state.profilePage.PostsPage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: () => {dispatch(AddPostActionCreator())},
        UpdatePostText: (text) => {dispatch(UpdateNewPostTextActionCreator(text))}
    }
}

const MyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfile)

export default MyProfileContainer;