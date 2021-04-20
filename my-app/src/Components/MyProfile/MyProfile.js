import style from './MyProfile.module.css'
import Post from './Posts/Post.js'

import ProfileContainer from './Profile/ProfileContainer.js'
import React from 'react';
import {Form, Field} from 'react-final-form'
import {FORM_ERROR} from 'final-form'
import cn from 'classnames'



class MyProfile extends React.Component{

    PressLike = (id) => {
        if(this.props.likedPostsID.indexOf(id) === -1){
            this.props.AddLikedPost(id)
            this.props.AddOneLike(id)
        }
        else{
            this.props.RemoveLikedPost(id)
            this.props.RemoveOneLike(id)
        }

    }

    onSubmit = (values) => {
        if(!values.postField){
            return null
        }
        this.props.AddPostActionCreator(values.postField)
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
            <div className={style.MyProfileWrapper} >
                <ProfileContainer/>
            <div className={style.postsWrapper} >
                <Form
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    render={({handleSubmit, submitError}) => (
                            <form onSubmit={handleSubmit }>
                                <div className={style.textareaWrapper}>
                                    <Field name="postField">
                                        {({input, meta}) => (
                                        <div>
                                            <textarea className={style.textarea} type="text" placeholder="How are you today?" {...input}  />
                                            <div>
                                                <button type="submit" className={cn("btn", "btn-primary", style.postButton)}>
                                                    Post
                                                </button>
                                                {submitError && <div className={style.errorText}>{submitError}</div>}
                                                {meta.touched && meta.error && <div className={style.errorText}>{meta.error}</div>}
                                            </div>


                                        </div>
                                            )}
                                    </Field>

                                </div>

                            </form>
                        )}
                />
                <Posts {...this.props} PressLike={this.PressLike} />
            </div>
            </div>
        )
    }

}

const Posts = (props) =>{
        return( props.posts.map(el => <Post key={el.id} {...props}  id={el.id} likeCount={el.likeCount} text={el.text} />) )
}


export default MyProfile;