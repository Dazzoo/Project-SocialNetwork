import c from './MyProfile.module.css'
import Post from './Posts/Post.js'
import Profile from './Profile/Profile.js'
import React from 'react'
import MyProfile from './MyProfile'
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from './../../redux/ProfileReducer'



const MyProfileContainer = (props) =>{
    let state = props.store.getState()

    let AddPost = () => {
        props.store.dispatch(AddPostActionCreator())
    }

    let UpdatePostText = (text) => {
        props.store.dispatch(UpdateNewPostTextActionCreator(text))
    }


    return (
        <MyProfile addPost={AddPost} updatePostText={UpdatePostText} state={state}/>
    );
}


export default MyProfileContainer;