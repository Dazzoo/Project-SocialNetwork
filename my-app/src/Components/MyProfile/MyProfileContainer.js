import React from 'react'
import MyProfile from './MyProfile'
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from './../../redux/ProfileReducer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class MyProfileClassContainer extends React.Component{

    render(){
        if(this.props.isAuth === false){return <Redirect to='/login' />}
        return(
        <MyProfile {...this.props}/>
        )
    }

}


let mapStateToProps = (state) => {
    return {
        ProfilePage: state.profilePage,
        newPostText: state.profilePage.textArea,
        posts: state.profilePage.posts,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: () => {dispatch(AddPostActionCreator())},
        UpdatePostText: (text) => {dispatch(UpdateNewPostTextActionCreator(text))}
    }
}

const MyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfileClassContainer)

export default MyProfileContainer;