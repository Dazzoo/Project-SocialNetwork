import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import * as axios from 'axios'
import {SetUserLoginData, SetAuth, SetAuthThunk, LogOutThunk, ChangeTheme} from '../../redux/authReducer'

class HeaderClassComponent extends React.Component{

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        theme: state.auth.theme
    }
}

const HeaderContainer = connect(mapStateToProps, {SetAuthThunk, LogOutThunk, ChangeTheme})(HeaderClassComponent)


export default HeaderContainer;