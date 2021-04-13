import style from './Post.module.css'

const Post = (props) => {
    let PressLike = () => {
        if(props.likedPostsID.indexOf(props.id) === -1){
            props.AddLikedPost(props.id)
            props.AddOneLike(props.id)
        }
        else{
            props.RemoveLikedPost(props.id)
            props.RemoveOneLike(props.id)
        }
        // Наш PressLike добавляет айди кликнутоко поста или удаляет если кликнуть второй раз
        // Сделать анимацию и счетчик
    }

    return (
        <div className={style.postWrapper} >
        <div>

        </div>
        <div className='Post_wrapper'>
            <img className={style.avatarMini} src='https://avatarfiles.alphacoders.com/268/thumb-1920-268622.jpg'/>
            <div className={style.postText}>{props.text}</div>
            {props.likedPostsID.indexOf(props.id) === -1 ? <button className="btn btn-outline-primary" onClick={PressLike}>👍{props.likeCount}</button> : <button className="btn btn-primary" onClick={PressLike}>👍{props.likeCount}</button>}
        </div>
        </div>
    );

}

// also when liked one style, when not - anouther


export default Post