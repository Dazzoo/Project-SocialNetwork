import c from './MyMessages.module.css'
import MyMessages from './MyMessages'
import React from 'react';
import {AddMessagetActionCreator, UpdateNewMessageTextActionCreator} from './../../redux/MessagesReducer'
import {connect} from 'react-redux'






let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagePage.textArea,
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(AddMessagetActionCreator())},
        updateMessage: (text) => {dispatch(UpdateNewMessageTextActionCreator(text))}
    }
}


const MyMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MyMessages)

export default MyMessagesContainer;