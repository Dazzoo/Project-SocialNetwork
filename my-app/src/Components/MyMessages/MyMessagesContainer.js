import c from './MyMessages.module.css'
import MyMessages from './MyMessages'
import React from 'react';
import {AddMessagetActionCreator, UpdateNewMessageTextActionCreator} from './../../redux/MessagesReducer'
import {connect} from 'react-redux'
import {Redirect} from  'react-router-dom'
import withAuthRedirect from './../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {TakeTextArea, TakeDialogs, TakeMessages} from  '../../redux/messages-selector'
import { withRouter } from "react-router"



class MyMessagesСlassContainer extends React.Component{


    render() {
        return (
            <MyMessages {...this.props} messageId={this.props.match.params.messageId} />
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
        addMessage: (text, id) => {dispatch(AddMessagetActionCreator(text, id))},
    }
}



export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MyMessagesСlassContainer);


