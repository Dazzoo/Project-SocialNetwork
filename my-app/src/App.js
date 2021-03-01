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
            <Sidebar friends={props.state.sidebar.Sidebar.friendsOnline}/>
            <Route path='/profile' render={() => <MyProfile Posts={props.state.profilePage.PostsPage.posts}
                                                            dispatch={props.dispatch}
                                                            textAreaValue={props.state.profilePage.PostsPage.textArea}/>}/>
            <Route path='/messages' render={() => <MyMessages dialogsData={props.state.messagePage.MessagePage.dialogs}
                                                              messagesData={props.state.messagePage.MessagePage.messages}
                                                              textAreaValue={props.state.messagePage.MessagePage.textArea}
                                                              dispatch={props.dispatch}/>}/>
            <Route path='/news' render={MyNews}/>
            <Route path='/music' render={MyMusic}/>
            <Route path='/settings' render={MySettings}/>
        </div>
      </div>
      </BrowserRouter>
          );
}





export default App;
