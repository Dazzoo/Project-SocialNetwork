import c from './MyProfile.module.css'
import Post from './Posts/Post.js'
import ProfileContainer from './Profile/ProfileContainer.js'
import React from 'react';
import {Form, Field} from 'react-final-form'



class MyProfile extends React.Component{
    onSubmit = (value) => {
        this.props.AddPost(value.postField)
    }

    render() {
        return (
            <div className='wrapper'>
                <ProfileContainer/>
                <Form
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <div  >
                                    <Field
                                        className={c.textarea}
                                        name="postField"
                                        component="textarea"
                                        type="text"
                                        placeholder="How are you today?"
                                    />
                                </div>
                                <div>
                                    <button type="submit">
                                        Post
                                    </button>
                                </div>
                            </form>
                        )}
                />
                <Posts {...this.props}/>
            </div>
        )
    }

}

const Posts = (props) =>{
        return( props.posts.map(el => <Post id={el.id} likeCount={el.likeCount} text={el.text} />) )
}


export default MyProfile;