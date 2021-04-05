import style from './Header.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logoPic from './../../assets/logoPic.png'
import logoText from  './../../assets/logoText.png'


const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logoPlace}>
                <img className={style.logoPic} src={logoPic} />
                <img className={style.logoText} src={logoText} />
            </div>
            <div className={style.else}>
            <div className={style.themeButton}>

                {!props.theme && <button type="button" className="btn btn-secondary" onClick={() => props.ChangeTheme(true)} >Dark theme</button>}
                {props.theme && <button type="button" className="btn btn-light" onClick={() => props.ChangeTheme(false)}>Light theme</button>}
            </div>
            <div className={style.Login}>
                {props.isAuth? <div className="" >{props.email}
                                    <div className={style.LogOut} ><button type="button" className={"btn btn-danger"} onClick={props.LogOutThunk}>LogOut</button></div>
                                </div>
                            : <NavLink  to={'/login'}><button type="button" class="btn btn-success " >Login</button></NavLink> }
            </div>
            </div>
        </header>
    );
}

export default Header;