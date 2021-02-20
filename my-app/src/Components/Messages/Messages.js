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
        <div>
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
    ]



const Messages = () => {
    return (
        <BrowserRouter>
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
                <Dialog name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={c.lastMessages}>
            <LastMessage text={messagesData[0].message}/>
            <LastMessage text={messagesData[1].message}/>
            <LastMessage text={messagesData[2].message}/>
            <LastMessage text={messagesData[3].message}/>
            <LastMessage text={messagesData[4].message}/>
            <LastMessage text={messagesData[5].message}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default Messages;