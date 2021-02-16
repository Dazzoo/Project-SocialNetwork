import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js'
import Sidebar from './Components/Sidebar/Sidebar.js'
import Profile from './Components/Profile/Profile.js'
import Messages from './Components/Messages/Messages.js'
import {BrowserRouter, Route} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
      <div className='wrapper'>
        <Header/>
        <div className='flexbox'>
            <Sidebar/>
            <Route path='/messages' component={Profile}/>
            <Route path='/profile' component={Messages}/>
        </div>
      </div>
      </BrowserRouter>
          );
}





export default App;
