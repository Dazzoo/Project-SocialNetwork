import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import {LoginThunk} from './../../redux/authReducer'



class LoginClassContainer extends React.Component {
    render() {
        return (
            <Login {...this.props} />
        )
    }



}

const mapStateToProps = () => {

}


const LoginContainer = connect(mapStateToProps, {LoginThunk})(LoginClassContainer)

export default LoginContainer