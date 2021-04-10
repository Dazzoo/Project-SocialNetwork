import c from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import  Friend from './Friend/Friend.js'
import React, { useState, useEffect } from 'react';

const Sidebar = (props) => {
    const FriendShow = props.friends.map( n  => <Friend name= {n.name} id= {n.id} />);


    useEffect(() => {
        if(props.theme){document.getElementById('55').style.color = 'white'
            document.getElementById('56').style.color = 'white'
            document.getElementById('57').style.color = 'white'
            document.getElementById('58').style.color = 'white'
            document.getElementById('59').style.color = 'white'
            document.getElementById('60').style.color = 'white'}
        if(!props.theme){document.getElementById('55').style.color = 'black'
            document.getElementById('56').style.color = 'black'
            document.getElementById('57').style.color = 'black'
            document.getElementById('58').style.color = 'black'
            document.getElementById('59').style.color = 'black'
            document.getElementById('60').style.color = 'black'}
    }, [props.theme])





    return (
        <div>
            <ul>
                <li><NavLink id="55"   to="/profile" activeClassName={c.active}>Profile</NavLink></li>
                <li><NavLink id="56"   to="/messages" activeClassName={c.active}>Messages</NavLink></li>
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