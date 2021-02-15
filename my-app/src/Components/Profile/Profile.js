import c from './Profile.module.css'
import Post from './Posts/Post.js'

let Profile = () =>{
    return (
        <div className='wrapper'>
            <div className={c.profile}>
            <img src='https://cdn.wallpapersafari.com/75/49/cfnSpg.jpg'/>
            </div>
        <Post onClick={1} />
        </div>
    );
}


export default Profile;