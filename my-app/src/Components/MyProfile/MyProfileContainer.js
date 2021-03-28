import React from 'react'
import MyProfile from './MyProfile'
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from './../../redux/profileReducer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {compose} from 'redux'
import {TakeProfilePage, TakePosts, TakeAuth} from '../../redux/profile-selector'


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
        ProfilePage: TakeProfilePage(state),
        posts: TakePosts(state),
        isAuth: TakeAuth(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: (text) => {dispatch(AddPostActionCreator(text))},
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(MyProfileClassContainer);