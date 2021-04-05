import c from './Post.module.css'

const Post = (props) => {
    let PressLike = () => {
        if(props.likedPostsID.indexOf(props.id) === -1){
            props.AddLikedPost(props.id)
        }
        else{
            props.RemoveLikedPost(props.id)
        }
        // Наш PressLike добавляет айди кликнутоко поста или удаляет если кликнуть второй раз
        // Сделать анимацию и счетчик
    }

    return (
        <div>
        <div>

        </div>
        <div className='Post_wrapper'>
            <img className={c.avatarMini} src='https://avatarfiles.alphacoders.com/268/thumb-1920-268622.jpg'/>
            <div className={c.postText}>{props.text}</div>
            <button className={c.buttonLike} onClick={PressLike}>👍{props.likeCount}</button>
        </div>
        </div>
    );

}

// also when liked one style, when not - anouther


export default Post;