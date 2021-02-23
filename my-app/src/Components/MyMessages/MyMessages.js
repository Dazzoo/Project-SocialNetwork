import c from './MyMessages.module.css'
import {NavLink} from "react-router-dom"
import DialogName from "./MessageItems/DialogName/DialogName"
import LastMessage from "./MessageItems/LastMessage/LastMessage"
import React from 'react';





const MyMessages = (props) => {
    let NewMessageElement = React.createRef();

    let sendMessage = () => {
        let text = NewMessageElement.current.value;
        alert(text);
    };



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
                <textarea className={c.textfield} ref={NewMessageElement}></textarea>
                <button className={c.sendMessage} onClick={sendMessage}>Send</button>
            </div>
        </div>

    );
}

export default MyMessages;