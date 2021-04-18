import c from './../../MyMessages.module.css'
import {NavLink} from "react-router-dom"


const DialogName = (props) => {
    return (
        <NavLink   to={"/messages/" + props.id} activeClassName={c.active} >
        <div className={c.dialog} >
            <img className={c.useravatar} src={props.avatar} />
            <div className={c.username} >{props.name}</div>
        </div>
    </NavLink>
    );

}

export  default DialogName;