import c from './MyProfile.module.css'
import Post from './Posts/Post.js'
import Profile from './Profile/Profile.js'
import React from 'react';
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from './../../redux/store'


const MyProfile = (props) =>{

    let TextAreaElement = React.createRef()

    let AddPost = () => {
        props.dispatch(AddPostActionCreator())
    }

    let UpdatePostText = () => {
        let text = TextAreaElement.current.value
        props.dispatch(UpdateNewPostTextActionCreator(text))
    }


    const PostsShow = props.Posts.map(el => <Post id={el.id} likeCount={el.likeCount} text={el.text} />)


    return (
        <div className='wrapper'>
            <Profile/>
            <textarea onChange={UpdatePostText} value = {props.textAreaValue} ref={TextAreaElement} className={c.textarea}></textarea>
            <button onClick={AddPost}>Post</button>
            {PostsShow}
        </div>
    );
}


export default MyProfile;