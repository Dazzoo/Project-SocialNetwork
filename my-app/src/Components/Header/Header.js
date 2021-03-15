import c from './Header.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.imageContainer}>
                <img className={c.header} src='http://goprincetontigers.com/images/logos/site/site.png' />
            </div>
            <div className={c.Login}>
                {props.isAuth? props.email : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;