import onlineImg from "./../../../img/greencircle.jpg"
import style from './Friend.module.css';

 const Friend = (props) => {
    return (
        <div className={style.friendsOnline} >
            <img className={style.onlineStatusImg} src={onlineImg}/>
            {props.name}

        </div>
    );
}

export default Friend;