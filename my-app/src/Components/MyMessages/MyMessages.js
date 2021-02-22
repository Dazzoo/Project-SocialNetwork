import c from './MyMessages.module.css'
import {NavLink} from "react-router-dom"
import DialogName from "./MessageItems/DialogName/DialogName"
import LastMessage from "./MessageItems/LastMessage/LastMessage"




const MyMessages = (props) => {





    const UserNamesShow = props.dialogsData.map( n  => <DialogName name= {n.name} id= {n.id} />);

    const LastMessageShow = props.messagesData.map( m  => <LastMessage text={m.message} id= {m.id} />);


    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {UserNamesShow}
            </div>
            <div className={c.lastMessages}>

                {LastMessageShow}
            </div>
        </div>

    );
}

export default MyMessages;