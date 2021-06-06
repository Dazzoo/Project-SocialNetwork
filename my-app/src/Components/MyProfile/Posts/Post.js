import style from './Post.module.css'

const Post = (props) => {

    return (

        <div className={style.postWrapper} >
        <div>
        </div>
        <div className='Post_wrapper'>
        <div className={style.avatarMini}>
            <img  src={props.ProfilePage.photos.large ? props.ProfilePage.photos.large
                :
                'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
        </div>
            <div className={style.postText}>{props.text}</div>
            <div className={style.LikeWrapper}>
            {props.likedPostsID.indexOf(props.id) === -1 ? <button className="btn btn-outline-primary" onClick={() => props.PressLike(props.id)}>👍{props.likeCount}</button> : <button className="btn btn-primary" onClick={() => props.PressLike(props.id)}>👍{props.likeCount}</button>}
            </div>
        </div>
        </div>
    );

}

// also when liked one style, when not - anouther


export default Post