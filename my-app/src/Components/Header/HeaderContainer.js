import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import * as axios from 'axios'
import {SetUserLoginData, SetAuth} from '../../redux/authReducer'

class HeaderClassComponent extends React.Component{
    componentDidMount() {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true})
            .then(response =>{
                if(response.data.resultCode === 0){
                    this.props.SetUserLoginData(response.data.data.id, response.data.data.email, response.data.data.login)
                    this.props.SetAuth(true)
                }

            })
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        email: state.auth.email
    }
}

const HeaderContainer = connect(mapStateToProps, {SetUserLoginData, SetAuth})(HeaderClassComponent)


export default HeaderContainer;