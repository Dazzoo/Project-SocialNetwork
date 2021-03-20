import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from  'react-router-dom'

let mapStateToPorps = (state) =>{
    return{
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component) => {
    class ClassComponent extends React.Component{
        render() {
            if(this.props.isAuth === false){return <Redirect to='/login' />}
            return (
                <Component {...this.props}/>
            )
        }
    }
    const ConnectedClassComponent = connect(mapStateToPorps)(ClassComponent)
    return ConnectedClassComponent
}


export default withAuthRedirect