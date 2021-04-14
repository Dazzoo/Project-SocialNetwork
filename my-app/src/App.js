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
import {PreloaderSkateboardForWindow} from './Components/common/Preloaders/PreloaderSkateboard'
import {Provider} from "react-redux"
import store from './redux/store-redux'
import withReactLazy from './hoc/withReactLazy'
import { Redirect } from "react-router-dom"
const MyMessagesContainer = React.lazy(() => import('./Components/MyMessages/MyMessagesContainer'))






class App extends React.Component {

    componentDidMount() {
        this.props.InitializeApp()
    }

    render(){
        if(!this.props.initialized){
            return <PreloaderSkateboardForWindow/>
        }

        return (
            <div >
                <div className={style.wrapper}>
                    <div className={style.gridbox}>
                        <div className={style.headerComponent} >
                            <HeaderContainer />
                        </div>
                        <div className={style.sidebar} >
                            <Sidebar theme={this.props.theme} friends={this.props.state.sidebar.Sidebar.friendsOnline} />
                        </div>
                        <div className={style.else}>
                            <Route path='/' render={() => <Redirect from="/" to="/profile/:userId?" />} />
                            <Route path='/profile/:userId?' render={() => <MyProfileContainer params={this.props.match.params}/>} />
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