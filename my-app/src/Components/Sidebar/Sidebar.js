import c from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

let Sidebar = () => {
    return (
        <aside className={c.sideBar}>
            <ul>
                <li><NavLink  to="/profile" activeClassName={c.active}>Profile</NavLink></li>
                <li><NavLink  to="/messages" activeClassName={c.active}>Messages</NavLink></li>
                <li><NavLink  to="/news" activeClassName={c.active}>News</NavLink></li>
                <li><NavLink  to="/music" activeClassName={c.active}>Music</NavLink></li>
                <li><NavLink  to="/settings" activeClassName={c.active}>Settings</NavLink></li>
            </ul>
        </aside>
    );
};

export default Sidebar;