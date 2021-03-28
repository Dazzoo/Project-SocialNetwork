import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import {LoginThunk, SetUserLoginData, SetAuthThunk, SetFetching} from './../../redux/authReducer'



class LoginClassContainer extends React.Component {
    render() {
        return (
            <Login {...this.props} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        errorMessage: state.auth.errorMessage,
        isFetching: state.auth.isFetching
    }
}


const LoginContainer = connect(mapStateToProps, {LoginThunk, SetUserLoginData, SetAuthThunk, SetFetching})(LoginClassContainer)

export default LoginContainer