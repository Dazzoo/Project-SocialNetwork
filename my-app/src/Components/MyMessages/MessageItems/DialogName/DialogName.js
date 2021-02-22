import c from './../../MyMessages.module.css'
import {NavLink} from "react-router-dom"

const DialogName = (props) => {
    return (
        <div className={c.dialog}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    );

}

export  default DialogName;