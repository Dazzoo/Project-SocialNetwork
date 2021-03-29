import logo from './logo.svg';
import './App.css';
import React from 'react'
import {connect} from 'react-redux'
import HeaderContainer from './Components/Header/HeaderContainer'
import Sidebar from './Components/Sidebar/Sidebar.js'
import MyProfileContainer from './Components/MyProfile/MyProfileContainer.js'
import MyMessagesContainer from './Components/MyMessages/MyMessagesContainer.js'
import MyNews from './Components/MyNews/MyNews.js'
import MyMusic from './Components/MyMusic/MyMusic.js'
import MySettings from './Components/MySettings/MySettings.js'
import {BrowserRouter, Route} from "react-router-dom";
import FindUsersContainer from './Components/findUsers/findUsersContainer'
import LoginContainer from  './Components/Login/LoginContainer'
import {InitializeApp} from './redux/authReducer'
import { withRouter } from "react-router"
import { compose } from 'redux'
import Preloader from  './Components/findUsers/FetchingIcon/FetchingIcon'



class App extends React.Component {

    componentDidMount() {
        this.props.InitializeApp()
    }

    render(){
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
                <div className='wrapper'>
                    <HeaderContainer/>
                    <div className='flexbox'>
                        <Sidebar friends={this.props.state.sidebar.Sidebar.friendsOnline} />
                        <Route path='/profile/:userId?' render={() => <MyProfileContainer/>} />
                        <Route path='/messages' render={() => <MyMessagesContainer/>} />
                        <Route path='/news' render={MyNews} />
                        <Route path='/music' render={MyMusic} />
                        <Route path='/settings' render={MySettings} />
                        <Route path='/findUsers' render={() => <FindUsersContainer/>} />
                        <Route path='/login' render={() => <LoginContainer/>} />
                    </div>
                </div>

        )


    }

}

const mapStateToProps = (state) => {
    return {
        state: state,
        initialized: state.auth.initialized
    }
}






export default compose(
    withRouter,
    connect(mapStateToProps,{InitializeApp}))(App)
