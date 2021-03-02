import c from './MyMessages.module.css'
import MyMessages from './MyMessages'
import React from 'react';
import {AddMessagetActionCreator, UpdateNewMessageTextActionCreator} from './../../redux/MessagesReducer'



const MyMessagesContainer = (props) => {
    let state = props.store.getState()

    let UpdateMessage = (text) => {
        props.store.dispatch(UpdateNewMessageTextActionCreator(text))
    };

    let AddMessage = () => {
        props.store.dispatch(AddMessagetActionCreator())
    }




    return (
        <MyMessages updateMessage={UpdateMessage} addMessage={AddMessage} state={state}/>
    );
}

export default MyMessagesContainer;