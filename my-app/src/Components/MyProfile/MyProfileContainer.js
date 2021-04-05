    import React from 'react'
import MyProfile from './MyProfile'
import {AddPostActionCreator} from './../../redux/profileReducer'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {TakeProfilePage, TakePosts, TakeAuth} from '../../redux/profile-selector'
import withAuthRedirect from './../../hoc/withAuthRedirect'



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
        isAuth: TakeAuth(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: (text) => {dispatch(AddPostActionCreator(text))},
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MyProfileClassContainer);