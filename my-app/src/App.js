import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js'
import Sidebar from './Components/Sidebar/Sidebar.js'
import MyProfileContainer from './Components/MyProfile/MyProfileContainer.js'
import MyMessagesContainer from './Components/MyMessages/MyMessagesContainer.js'
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
            <Route path='/profile' render={() => <MyProfileContainer store={props.store}/>}/>
            <Route path='/messages' render={() => <MyMessagesContainer store={props.store}/>}/>
            <Route path='/news' render={MyNews}/>
            <Route path='/music' render={MyMusic}/>
            <Route path='/settings' render={MySettings}/>
        </div>
      </div>
      </BrowserRouter>
          );
}





export default App;
