import c from './Post.module.css'

const Post = (props) => {

    return (
        <div>
        <div>

        </div>
        <div className='Post_wrapper'>
            <img className={c.avatarMini} src='https://avatarfiles.alphacoders.com/268/thumb-1920-268622.jpg'/>
            <div className={c.postText}>{props.text}</div>
            <button className={c.buttonLike}>👍{props.likeCount}</button>
        </div>
        </div>
    );

}




export default Post;