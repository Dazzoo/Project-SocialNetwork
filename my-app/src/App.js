import logo from './logo.svg';
import './App.css';



function App() {
  return (
      <div>
        <header>YourLogo</header>
        <div className= 'page'>
          <aside className='side-bar'>
            <ul>
              <li>Profile</li>
              <li>Messages</li>
              <li>News</li>
              <li>Music</li>
              <li>Settings</li>
            </ul>
          </aside>
          <div className='profile'>
            <div className='wallpaper'>
              <img src='https://images.pexels.com/photos/255419/pexels-photo-255419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
          </div>
        </div>
      </div>);
}





export default App;
