import c from './Messages.module.css'
import '../../App.css';
import {NavLink} from "react-router-dom"
import {BrowserRouter, Route} from "react-router-dom";


const Dialog = (props) => {
    return (
        <div className={c.dialog}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    );

};

const Text = (props) => {
    return (
        <div className={c.text}>
            {props.lastMessage}
        </div>
    );
}

const LastMessage = (props) => {
    return (
        <div className={c.lastMessages}>
            <Text lastMessage="Hi" />
            <Text lastMessage="How do you do bro?" />
            <Text lastMessage="I would like more, heh)" />
            <Text lastMessage="Nope, its bad idea." />
            <Text lastMessage="I am from Taiwan" />
            <Text lastMessage="Here we go again" />
        </div>

    );
}

const UserDialog = (props) => {
    return (
        <div>
            {props.text}
        </div>

    );
}


const Messages = () => {
    return (
        <BrowserRouter>
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <Dialog name="Monica" id="1"/>
                <Dialog name="Artem" id="2"/>
                <Dialog name="Nasty" id="3"/>
                <Dialog name="Nika" id="4"/>
                <Dialog name="Andrey" id="5"/>
                <Dialog name="Oliver" id="6"/>
            </div>
            <Route path='/messages' component={LastMessage}/>
            <Route path='/messages/1' component={UserDialog}/>
            <Route path='/messages/2' component={UserDialog}/>
            <Route path='/messages/3' component={UserDialog}/>   {/* Сделать открытие всей переписки с человеком по клику ника */}
            <Route path='/messages/4' component={UserDialog}/>
            <Route path='/messages/5' component={UserDialog}/>
            <Route path='/messages/6' component={UserDialog}/>
        </div>
        </BrowserRouter>
    );
}

export default Messages;