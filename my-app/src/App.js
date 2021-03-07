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
import FindUsersContainer from './Components/findUsers/findUsersContainer'



const App = (props) => {
  return (
      <BrowserRouter>
      <div className='wrapper'>
        <Header/>
        <div className='flexbox'>
            <Sidebar friends={props.state.sidebar.Sidebar.friendsOnline}/>
            <Route path='/profile' render={() => <MyProfileContainer/>}/>
            <Route path='/messages' render={() => <MyMessagesContainer/>}/>
            <Route path='/news' render={MyNews}/>
            <Route path='/music' render={MyMusic}/>
            <Route path='/settings' render={MySettings}/>
            <Route path='/findUsers' render={() => <FindUsersContainer/>}/>
        </div>
      </div>
      </BrowserRouter>
          );
}





export default App;
