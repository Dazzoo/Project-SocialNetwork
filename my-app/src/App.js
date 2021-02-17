import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js'
import Sidebar from './Components/Sidebar/Sidebar.js'
import Profile from './Components/Profile/Profile.js'
import Messages from './Components/Messages/Messages.js'
import News from './Components/News/News.js'
import Music from './Components/Music/Music.js'
import Settings from './Components/Settings/Settings.js'
import {BrowserRouter, Route} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
      <div className='wrapper'>
        <Header/>
        <div className='flexbox'>
            <Sidebar/>
            <Route path='/profile' component={Profile}/>
            <Route path='/messages' component={Messages}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
        </div>
      </div>
      </BrowserRouter>
          );
}





export default App;
