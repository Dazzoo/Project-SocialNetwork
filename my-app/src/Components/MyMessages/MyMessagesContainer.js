import c from './MyMessages.module.css'
import MyMessages from './MyMessages'
import React from 'react';
import {AddMessagetActionCreator, UpdateNewMessageTextActionCreator} from './../../redux/MessagesReducer'
import {connect} from 'react-redux'
import {Redirect} from  'react-router-dom'
import withAuthRedirect from './../../hoc/withAuthRedirect'
import {compose} from 'redux'



class MyMessagesСlassContainer extends React.Component{
    render() {
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
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(AddMessagetActionCreator())},
        updateMessage: (text) => {dispatch(UpdateNewMessageTextActionCreator(text))}
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MyMessagesСlassContainer);


