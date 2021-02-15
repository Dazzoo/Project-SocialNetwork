import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import Sidebar from './Components/Sidebar.js'
import Profile from './Components/Profile.js'



function App() {
  return (
      <div className='wrapper'>
        <Header/>
        <div className='flexbox'>
            <Sidebar/>
            <Profile/>
        </div>
      </div>);
}





export default App;
