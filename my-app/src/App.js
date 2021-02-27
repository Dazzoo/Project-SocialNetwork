import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js'
import Sidebar from './Components/Sidebar/Sidebar.js'
import MyProfile from './Components/MyProfile/MyProfile.js'
import MyMessages from './Components/MyMessages/MyMessages.js'
import MyNews from './Components/MyNews/MyNews.js'
import MyMusic from './Components/MyMusic/MyMusic.js'
import MySettings from './Components/MySettings/MySettings.js'
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {

  return (
      <BrowserRouter>
      <div className='wrapper'>
        <Header/>
        <div className='flexbox'>
            <Sidebar friends={props.state.Friends.friendsOnline}/>
            <Route path='/profile' render={() => <MyProfile Posts={props.state.PostsPage.posts}
                                                            dispatch={props.dispatch}
                                                               textAreaValue={props.state.PostsPage.textArea}/>}/>
            <Route path='/messages' render={() => <MyMessages dialogsData={props.state.MessagePage.dialogs}
                                                                 messagesData={props.state.MessagePage.messages}/>}/>
            <Route path='/news' render={MyNews}/>
            <Route path='/music' render={MyMusic}/>
            <Route path='/settings' render={MySettings}/>
        </div>
      </div>
      </BrowserRouter>
          );
}





export default App;
