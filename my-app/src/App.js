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



function App(props) {



  return (
      <BrowserRouter>
      <div className='wrapper'>
        <Header/>
        <div className='flexbox'>
            <Sidebar/>
            <Route path='/profile' component={() => <MyProfile Posts={props.Posts}/>}/>
            <Route path='/messages' component={() => <MyMessages dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
            <Route path='/news' component={MyNews}/>
            <Route path='/music' component={MyMusic}/>
            <Route path='/settings' component={MySettings}/>
        </div>
      </div>
      </BrowserRouter>
          );
}





export default App;
