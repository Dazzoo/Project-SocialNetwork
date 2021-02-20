import c from './Post.module.css'

const Posts = [
    {id: 1, likeCount: 3, text:"Сегодня в нашем королевстве все спокойно"},
    {id: 2, likeCount: 2, text:"Сегодня в нашем королевстве все хорошо"},
    {id: 3, likeCount: 6, text:"Сегодня в нашем королевстве война, северяне нападают"},
    {id: 4, likeCount: 2, text:"Сегодня в нашем королевстве война, северяне напали"}
]


const Post = (props) => {
    return (
        <div className='Post_wrapper'>
            <img className={c.avatarMini} src='https://avatarfiles.alphacoders.com/268/thumb-1920-268622.jpg'/>
            <div className={c.postText}>{props.text}</div>
            <button className={c.buttonLike}>👍{props.likeCount}</button>
        </div>
    );

}

const PostsShow = Posts.map(el => <Post id={el.id} likeCount={el.likeCount} text={el.text}/>)



export default PostsShow;