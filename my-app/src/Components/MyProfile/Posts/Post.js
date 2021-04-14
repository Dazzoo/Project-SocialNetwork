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

    }
    return (

        <div className={style.postWrapper} >
        <div>
        </div>
        <div className='Post_wrapper'>
            <img className={style.avatarMini} src={props.ProfilePage.photos.large ? props.ProfilePage.photos.large
                :
                'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
            <div className={style.postText}>{props.text}</div>
            {props.likedPostsID.indexOf(props.id) === -1 ? <button className="btn btn-outline-primary" onClick={PressLike}>👍{props.likeCount}</button> : <button className="btn btn-primary" onClick={PressLike}>👍{props.likeCount}</button>}
        </div>
        </div>
    );

}

// also when liked one style, when not - anouther


export default Post