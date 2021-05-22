import React from 'react'
import style from './Login.module.css'
import {Form, Field} from 'react-final-form'
import {FORM_ERROR} from 'final-form'
import {Redirect} from  'react-router-dom'
import {PreloaderThreeDots} from './../common/Preloaders/PreloaderThreeDots'
import Capcha from './Capcha/Capcha'
import cn from 'classnames'



class Login extends React.Component{


    onSubmit = async values =>{
        this.props.SetFetching(true)
        await this.props.LoginThunk(values.email, values.password, values.capcha)
        this.props.SetFetching(false)
        if(this.props.capchaIsRequired){
            return { [FORM_ERROR]: <Capcha {...this.props} onSubmit={this.onSubmit} validate={this.validate}/>}
        }
        await this.props.LoginThunk(values.email, values.password, values.capcha)
        if(values.email && values.email.indexOf('@') === -1){
            return {email: 'Please, enter valid email address'}
        }
        values.email = ''
        values.password = ''
        if(this.props.message !== null){
            debugger
            return { [FORM_ERROR]: this.props.message[0] }
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
        <div className={style.LoginWrapper} >
        <div className={style.LoginContainer}>
                <div className={style.Login}>Login</div>
                    <div className={style.InputsWrapper} >
                        <Form
                            onSubmit={this.onSubmit}
                            validate={this.validate}
                            render={({handleSubmit, submitError}) => (
                                <form onSubmit={handleSubmit}>
                                    <div className={style.inputArea} >
                                        <Field name="email">
                                            {({input, meta}) => (
                                                <div>
                                                    <input  type="text" placeholder="Email" {...input} />
                                                    <div className={style.errorArea} >
                                                    {(meta.error || meta.submitError) && meta.touched && (
                                                        <span className={style.errorText} >{meta.error || meta.submitError}</span>
                                                    )}
                                                    </div>
                                                </div>

                                            )}
                                            </Field>
                                    </div>
                                    <div className={style.inputArea}  >
                                        <Field  name="password">
                                            {({input, meta}) => (
                                                <div>
                                                    <input  type="password" placeholder="Password" {...input} />
                                                    <div className={style.errorArea}>
                                                    {(meta.error || meta.submitError) && meta.touched && (
                                                        <span className={style.errorText} >{meta.error || meta.submitError}</span>
                                                    )}
                                                    </div>
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
                                    <div className={style.submitButton}>
                                        <button type="submit" className={cn( "btn btn-success")} class="btn btn-success" disabled={this.submitting}>
                                            Login
                                            </button>
                                    </div>
                                    {submitError && <div className={style.submitError}>{submitError}</div>}
                                    {this.props.isFetching? <PreloaderThreeDots/> : null}

                                </form>
                            )}
                        />
                    </div>
            <div className={style.prompt}>Welcome =)</div>
            <div className={style.prompt} >Email: yuraks46@gmail.com Password: test8841</div>
            <div className={style.prompt} >or</div>
            <div className={style.prompt} >Email: free@samuraijs.com Password: free</div>
            </div>
        </div>
    )
    }
}




export default Login