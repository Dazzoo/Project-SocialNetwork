import React from 'react'
import style from './Login.module.css'
import {Form, Field} from 'react-final-form'
import {FORM_ERROR} from 'final-form'
import {Redirect} from  'react-router-dom'
import FetchingIcon from './../findUsers/FetchingIcon/FetchingIcon'



class Login extends React.Component{

    sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    onSubmit = async values =>{
        this.props.SetFetching(true)
        this.props.LoginThunk(values.email, values.password)
        while (this.props.authRequestIsDone != true){
            await this.sleep(100)

        }
        this.props.AuthRequestIsDone(false)
        this.props.SetFetching(false)
        if(values.email && values.email.indexOf('@') === -1){
            return {email: 'Please, enter valid email address'}
        }
        values.email = ''
        values.password = ''
        if(this.props.errorMessage != null){
            return { [FORM_ERROR]: 'The email adress or password is incorrect' }
        }
    }

    validate = (values) =>{
        const errors = {}
        if(!values.email){
            errors.email = 'Required'
        }
        if(!values.password){
            errors.password = 'Required'
        }

        return errors
    }


    render(){
        {if(this.props.isAuth === true){return <Redirect to='/profile' />}}
    return (
        <div>
            <div className={style.Login}>LoginPage</div>
            <Form
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={({handleSubmit, submitError}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name="email">
                                {({input, meta}) => (
                                    <div>
                                        <input type="text" placeholder="Email" {...input} />
                                        {(meta.error || meta.submitError) && meta.touched && (
                                            <span className={style.errorText} >{meta.error || meta.submitError}</span>
                                        )}
                                    </div>

                                )}
                                </Field>
                        </div>
                        <div>
                            <Field name="password">
                                {({input, meta}) => (
                                    <div>
                                        <input type="password" placeholder="Password" {...input} />
                                        {(meta.error || meta.submitError) && meta.touched && (
                                            <span className={style.errorText} >{meta.error || meta.submitError}</span>
                                        )}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <Field
                                name="checkbox"
                                component="input"
                                type="checkbox"
                            />
                            Remember me
                        </div>
                        {this.props.isFetching? <FetchingIcon/> : null}
                        {submitError && <div className={style.submitError}>{submitError}</div>}
                        <div>
                            <button type="submit" disabled={this.submitting}>
                                Submit
                                </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
    }
}



export default Login