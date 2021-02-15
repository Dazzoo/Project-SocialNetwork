import c from './Post.module.css'
let props = {countLikes: '2'
};

const Post = (props) => {
    return (
        <div className='Post_wrapper'>
            <img className={c.avatarMini} src='https://avatarfiles.alphacoders.com/268/thumb-1920-268622.jpg'/>
            <div className={c.postText}>Сегодня в нашем королевстве все спокойно</div>
            <button className={c.buttonLike}>👍 {props.onClick} </button>
        </div>
    );

}




export default Post;