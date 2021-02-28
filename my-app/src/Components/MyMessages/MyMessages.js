import c from './MyMessages.module.css'
import {NavLink} from "react-router-dom"
import DialogName from "./MessageItems/DialogName/DialogName"
import LastMessage from "./MessageItems/LastMessage/LastMessage"
import React from 'react';
import {AddMessagetActionCreator, UpdateNewMessageTextActionCreator} from './../../redux/store'





const MyMessages = (props) => {

    let NewMessageElement = React.createRef();

    let UpdateMessage = () => {
        let text = NewMessageElement.current.value;
        props.dispatch(UpdateNewMessageTextActionCreator(text))
    };

    let AddMessage = () => {
        props.dispatch(AddMessagetActionCreator())
    }



    const UserNamesShow = props.dialogsData.map( n  => <DialogName name= {n.name} id= {n.id} avatar= {n.avatar} />);

    const LastMessageShow = props.messagesData.map( m  => <LastMessage text={m.message} id= {m.id} />);


    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {UserNamesShow}
            </div>
            <div className={c.lastMessages}>

                {LastMessageShow}
            </div>
            <div>
                <textarea onChange={UpdateMessage} value={props.textAreaValue} className={c.textfield} ref={NewMessageElement}></textarea>
                <button className={c.sendMessage} onClick={AddMessage}>Send</button>
            </div>
        </div>

    );
}

export default MyMessages;