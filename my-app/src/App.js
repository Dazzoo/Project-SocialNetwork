import logo from './logo.svg';
import style from './App.module.css';
import React, { Suspense } from 'react'
import {connect} from 'react-redux'
import HeaderContainer from './Components/Header/HeaderContainer'
import Sidebar from './Components/Sidebar/Sidebar.js'
import MyProfileContainer from './Components/MyProfile/MyProfileContainer.js'
import MyNews from './Components/MyNews/MyNews.js'
import MyMusic from './Components/MyMusic/MyMusic.js'
import MySettings from './Components/MySettings/MySettings.js'
import {HashRouter, Route} from "react-router-dom";
import FindUsersContainer from './Components/findUsers/findUsersContainer'
import LoginContainer from  './Components/Login/LoginContainer'
import {InitializeApp} from './redux/authReducer'
import { withRouter } from "react-router"
import { compose } from 'redux'
import Preloader from  './Components/findUsers/FetchingIcon/FetchingIcon'
import {Provider} from "react-redux"
import store from './redux/store-redux'
import withReactLazy from './hoc/withReactLazy'
const MyMessagesContainer = React.lazy(() => import('./Components/MyMessages/MyMessagesContainer'))





class App extends React.Component {

    componentDidMount() {
        this.props.InitializeApp()
    }

    render(){
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className={`${this.props.theme && style.backgroundDark} ${!this.props.theme && style.backgroundLight}`}>
                <div className={style.wrapper}>
                    <div className={style.gridbox}>
                        <div className={style.headerComponent} >
                            <HeaderContainer />
                        </div>
                        <div className={style.sidebar} >
                            <Sidebar friends={this.props.state.sidebar.Sidebar.friendsOnline} />
                        </div>
                        <div className={style.else}>
                        <Route path='/profile/:userId?' render={() => <MyProfileContainer/>} />
                        <Route path='/messages' render={() => withReactLazy(MyMessagesContainer)} />
                        <Route path='/news' render={() => withReactLazy(MyNews)} />
                        <Route path='/music' render={() => withReactLazy(MyMusic)} />
                        <Route path='/settings' render={() => withReactLazy(MySettings)} />
                        <Route path='/findUsers' render={() => withReactLazy(FindUsersContainer)} />
                        <Route path='/login' render={() => <LoginContainer/>} />
                        </div>
                    </div>
                </div>
            </div>
        )


    }

}



const mapStateToProps = (state) => {
    return {
        state: state,
        initialized: state.auth.initialized,
        theme: state.auth.theme
    }
}






let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{InitializeApp}))(App)

class AppHightContainer extends React.Component {
    render(){
        return (
            <HashRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </HashRouter>
        )
    }
}

export default AppHightContainer