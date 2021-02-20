import c from './../../Messages.module.css'

const LastMessage = (props) => {
    return (
        <div className={c.lastMessage}>
            {props.text}
        </div>
    );
}

export default LastMessage;