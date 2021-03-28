import c from './MyMessages.module.css'
import MyMessages from './MyMessages'
import React from 'react';
import {AddMessagetActionCreator, UpdateNewMessageTextActionCreator} from './../../redux/MessagesReducer'
import {connect} from 'react-redux'
import {Redirect} from  'react-router-dom'
import withAuthRedirect from './../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {TakeTextArea, TakeDialogs, TakeMessages} from  '../../redux/messages-selector'



class MyMessagesСlassContainer extends React.Component{
    render() {
        return (
            <MyMessages {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        newMessageText: TakeTextArea(state),
        dialogs: TakeDialogs(state),
        messages: TakeMessages(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {dispatch(AddMessagetActionCreator(text))},
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MyMessagesСlassContainer);


