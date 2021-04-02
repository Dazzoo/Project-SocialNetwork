import c from './MyProfile.module.css'
import Post from './Posts/Post.js'
import ProfileContainer from './Profile/ProfileContainer.js'
import React from 'react';
import {Form, Field} from 'react-final-form'



class MyProfile extends React.Component{
    onSubmit = (values) => {
        this.props.AddPost(values.postField)
        values.postField = ''
        values.submit = ''
    }
    validate = (values) => {
        const errors = {}

        if(values.postField && values.postField.length < 10){
            errors.postField = 'Minimum post length is 10 symbols'
        }

        return errors
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
                                <div>
                                    <Field name="postField">
                                        {({input, meta}) => (
                                        <div>
                                            <textarea className={c.textarea}  type="text" placeholder="How are you today?" {...input}  />
                                            {meta.touched && meta.error && <div className={c.errorText}>{meta.error}</div>}
                                            <span></span>
                                        </div>
                                            )}
                                    </Field>
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