import c from './MyMessages.module.css'
import MyMessages from './MyMessages'
import React from 'react';
import {AddMessagetActionCreator, UpdateNewMessageTextActionCreator} from './../../redux/MessagesReducer'
import {connect} from 'react-redux'
import {Redirect} from  'react-router-dom'



class MyMessagesСlassContainer extends React.Component{
    render() {
        if(this.props.isAuth === false){return <Redirect to='/login' />}
        return (
            <MyMessages {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagePage.textArea,
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(AddMessagetActionCreator())},
        updateMessage: (text) => {dispatch(UpdateNewMessageTextActionCreator(text))}
    }
}


const MyMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MyMessagesСlassContainer)

export default MyMessagesContainer;


