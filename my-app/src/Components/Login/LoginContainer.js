import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import {LoginThunk, SetUserLoginData, SetAuthThunk, SetFetching} from './../../redux/authReducer'
import {TakeIsAuth, TakeEmail, TakeErrorMessage, TakeIsFetching} from '../../redux/auth-selector'



class LoginClassContainer extends React.Component {
    render() {
        return (
            <Login {...this.props} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: TakeIsAuth(state),
        email: TakeEmail(state),
        errorMessage: TakeErrorMessage(state),
        isFetching: TakeIsFetching(state),
        authRequestIsDone: state.auth.authRequestIsDone,
        LoginDataError: state.auth.LoginDataError
    }
}


const LoginContainer = connect(mapStateToProps, {LoginThunk, SetUserLoginData, SetAuthThunk, SetFetching})(LoginClassContainer)

export default LoginContainer