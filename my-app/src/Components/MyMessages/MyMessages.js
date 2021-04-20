import style from './MyMessages.module.css'
import {NavLink} from "react-router-dom"
import DialogName from "./MessageItems/DialogName/DialogName"
import LastMessage from "./MessageItems/LastMessage/LastMessage"
import React from 'react';
import {AddMessagetActionCreator, UpdateNewMessageTextActionCreator} from './../../redux/MessagesReducer'
import {Form, Field} from 'react-final-form'
import { Route } from "react-router-dom";





class MyMessages extends React.Component{

    onSubmit = (values) => {
        this.props.addMessage(values.message, this.props.messageId)
        values.message = ''
    }


    render() {
        return (
            <div className={style.dialogsWrapper}>
                <div className={style.dialogsItems}>
                    <UserNames {...this.props}/>
                </div>

                {!this.props.messageId ? null
                    :

                    <>
                            <div className={style.lastMessages}>
                                <LastMessages {...this.props} />
                            </div>
                            <div className={style.inputArea} >
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
                                        <button type="submit" className="btn btn-success">
                                    Send
                                    </button>
                                    </div>
                                    </form>
                                    )}
                                    />
                                </div>
                        </>

                }



            </div>

        )
    }

}

const UserNames = (props) =>{
    return (
        props.dialogs.map( n  => <DialogName key={n.id} name= {n.name} id={n.id} avatar= {n.avatar} /> )
    )
}

const LastMessages = (props) =>{
    return (
        props.messages.map( (m) =>{ if(m.id == props.match.params.messageId){return <LastMessage key={m.id} text={m.message} />} } )
    )

}

export default MyMessages;