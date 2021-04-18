import style from './../../MyMessages.module.css'

const LastMessage = (props) => {
    return (
        <div className={style.lastMessage}>
            {props.text.map(t => <div className={style.message} >{t}</div> )}
        </div>
    );
}

export default LastMessage;