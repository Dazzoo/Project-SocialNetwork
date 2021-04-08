import c from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import  Friend from './Friend/Friend.js'

const Sidebar = (props) => {
    const FriendShow = props.friends.map( n  => <Friend name= {n.name} id= {n.id} />);

    return (
        <div>
            <ul>
                <li><NavLink  to="/profile" activeClassName={c.active}>Profile</NavLink></li>
                <li><NavLink  to="/messages" activeClassName={c.active}>Messages</NavLink></li>
                <li><NavLink  to="/news" activeClassName={c.active}>News</NavLink></li>
                <li><NavLink  to="/music" activeClassName={c.active}>Music</NavLink></li>
                <li><NavLink  to="/settings" activeClassName={c.active}>Settings</NavLink></li>
                <li><NavLink  to="/findUsers" activeClassName={c.active}>FindUsers</NavLink></li>
            </ul>
            <div className={c.friends}>
                FriendsOnline
            </div>
            <div>
                {FriendShow}
            </div>
        </div>
    );
};

export default Sidebar;