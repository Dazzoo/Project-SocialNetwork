import c from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import  Friend from './Friend/Friend.js'
import React, { useState, useEffect } from 'react';

const Sidebar = (props) => {
    const FriendShow = props.friends.map( n  => <Friend name= {n.name} id= {n.id} />);







    return (
        <div className={c.sidebarWrapper}>
            <ul>
                <li><NavLink id="55"  to="/profile" activeClassName={c.active}>Profile</NavLink></li>
                <li><NavLink id="56"  to="/messages" activeClassName={c.active}>Messages</NavLink></li>
                <li><NavLink id="57"  to="/news" activeClassName={c.active}>News</NavLink></li>
                <li><NavLink id="58"  to="/music" activeClassName={c.active}>Music</NavLink></li>
                <li><NavLink id="59"  to="/settings" activeClassName={c.active}>Settings</NavLink></li>
                <li><NavLink id="60"  to="/findUsers" activeClassName={c.active}>FindUsers</NavLink></li>
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