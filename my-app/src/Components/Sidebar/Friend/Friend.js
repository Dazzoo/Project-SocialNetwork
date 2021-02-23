import onlineImg from "./../../../img/greencircle.jpg"
import c from './Friend.module.css';

 const Friend = (props) => {
    return (
        <div>
            {props.name}
            <img className={c.onlineStatusImg} src={onlineImg}/>
        </div>
    );
}

export default Friend;