import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'


class LoginClassContainer extends React.Component {
    render() {
        return (
            <Login/>
        )
    }



}



const LoginContainer = connect()(LoginClassContainer)

export default LoginContainer