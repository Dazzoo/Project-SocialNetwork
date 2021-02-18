import c from './Messages.module.css'
import {NavLink} from "react-router-dom"

const Messages = () => {
    return (
        <div className={c.messages}>
            <div className={c.dialogs}>
                <div className={c.dialog}>
                    <NavLink to="/messages/1">Monica</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/messages/2">Artem</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/messages/3">Nasty</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/messages/4">Nika</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/messages/5">Andrey</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/messages/6">Oliver</NavLink>
                </div>
            </div>
            <div className={c.messagesText}>
                <div className={c.messageText}>
                    Hi
                </div>
                <div className={c.messageText}>
                    How do you do bro?
                </div>
                <div className={c.messageText}>
                    I would like more, heh)
                </div>
                <div className={c.messageText}>
                    Nope, its bad idea.
                </div>

            </div>
        </div>
    );
}

export default Messages;