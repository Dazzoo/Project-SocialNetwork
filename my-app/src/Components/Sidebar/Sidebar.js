import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import  Friend from './Friend/Friend.js'
import React, { useState, useEffect } from 'react';

const Sidebar = (props) => {
    const FriendShow = props.friends.map( n  => <Friend name= {n.name} id= {n.id} />);







    return (
        <div className={style.sidebarWrapper}>
            <ul>
                <li><NavLink   to="/profile" activeClassName={style.active}>Profile</NavLink></li>
                <li><NavLink   to="/messages" activeClassName={style.active}>Messages</NavLink></li>
                <li><NavLink   to="/news" activeClassName={style.active}>News</NavLink></li>
                <li><NavLink   to="/music" activeClassName={style.active}>Music</NavLink></li>
                <li><NavLink   to="/settings" activeClassName={style.active}>Settings</NavLink></li>
                <li><NavLink   to="/findUsers" activeClassName={style.active}>FindUsers</NavLink></li>
            </ul>
            <div className={style.friends}>
                Friends online
            </div>
            <div>
                {FriendShow}
            </div>
        </div>
    );
};

export default Sidebar;