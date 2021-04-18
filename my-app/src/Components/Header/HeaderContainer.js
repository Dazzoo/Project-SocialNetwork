import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import * as axios from 'axios'
import {SetUserLoginData, SetAuth, SetAuthThunk, LogOutThunk} from '../../redux/authReducer'

class HeaderClassComponent extends React.Component{

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        login: state.auth.login
    }
}

const HeaderContainer = connect(mapStateToProps, {SetAuthThunk, LogOutThunk})(HeaderClassComponent)


export default HeaderContainer;