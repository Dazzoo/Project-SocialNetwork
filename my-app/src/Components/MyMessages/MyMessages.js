import c from './MyMessages.module.css'
import {NavLink} from "react-router-dom"
import DialogName from "./MessageItems/DialogName/DialogName"
import LastMessage from "./MessageItems/LastMessage/LastMessage"
import React from 'react';
import {AddMessagetActionCreator, UpdateNewMessageTextActionCreator} from './../../redux/MessagesReducer'
import {Form, Field} from 'react-final-form'





class MyMessages extends React.Component{

    onSubmit = (values) => {
        this.props.addMessage(values.message)
        values.message = ''
    }


    render() {
        return (
            <div className={c.dialogs}>
                <div className={c.dialogsItems}>
                    <UserNames {...this.props}/>
                </div>
                <div className={c.lastMessages}>
                    <LastMessages {...this.props}/>
                </div>
                <div>
                    <Form
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                            <Field
                                name="message"
                                component="textarea"
                                type="text"
                                placeholder="Type your message"
                            />
                                <div>
                                    <button type="submit" class="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    />
                </div>
            </div>

        )
    }

}

const UserNames = (props) =>{
    return (
        props.dialogs.map( n  => <DialogName name= {n.name} id= {n.id} avatar= {n.avatar} />)
    )
}

const LastMessages = (props) =>{
    return (
        props.messages.map( m  => <LastMessage text={m.message} id= {m.id} />)
    )
}

export default MyMessages;