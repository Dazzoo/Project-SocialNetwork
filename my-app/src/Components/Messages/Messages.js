import c from './Messages.module.css'
import {NavLink} from "react-router-dom"
import {BrowserRouter, Route} from "react-router-dom";


const Dialog = (props) => {
    return (
        <div className={c.dialog}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    );

}

const LastMessage = (props) => {
    return (
        <div className={c.lastMessage}>
            {props.text}
        </div>
    );
}

const dialogsData = [
    {id: 1, name: 'Monica'},
    {id: 2, name: 'Artem'},
    {id: 3, name: 'Nasty'},
    {id: 4, name: 'Nika'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'Oliver'}
    ]

const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How do you do bro?'},
    {id: 3, message: 'I would like more, heh)'},
    {id: 4, message: 'Nope, its bad idea.'},
    {id: 5, message: 'I am from Taiwan'},
    {id: 6, message: 'Here we go again'},
    ];

const UserNamesShow = dialogsData.map( n  => <Dialog name= {n.name} id= {n.id} />);

const LastMessageShow = messagesData.map( m  => <LastMessage text={m.message} id= {m.id} />);



const Messages = () => {
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

export default Messages;