import c from './Profile.module.css'
import PostsShow from './Posts/Post.js'

let Profile = () =>{
    return (
        <div className='wrapper'>
            <div className={c.profile}>
                <img src='https://cdn.wallpapersafari.com/75/49/cfnSpg.jpg'/>
            </div>
            {PostsShow}
        </div>
    );
}


export default Profile;