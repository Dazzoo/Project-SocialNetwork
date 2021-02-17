import c from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

let Sidebar = () => {
    return (
        <aside className={c.sideBar}>
            <ul>
                <li><NavLink  to="/profile">Profile</NavLink></li>
                <li><NavLink  to="/messages">Messages</NavLink></li>
                <li><NavLink  to="/news">News</NavLink></li>
                <li><NavLink  to="/music">Music</NavLink></li>
                <li><NavLink  to="/settings">Settings</NavLink></li>
            </ul>
        </aside>
    );
};

export default Sidebar;