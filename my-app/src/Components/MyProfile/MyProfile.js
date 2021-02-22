import c from './MyProfile.module.css'
import Post from './Posts/Post.js'
import Profile from './Profile/Profile.js'

const MyProfile = (props) =>{



    const PostsShow = props.Posts.map(el => <Post id={el.id} likeCount={el.likeCount} text={el.text}/>)


    return (
        <div className='wrapper'>
            <Profile/>
            <textarea className={c.textarea}></textarea>
            <button>Post</button>
            {PostsShow}
        </div>
    );
}


export default MyProfile;