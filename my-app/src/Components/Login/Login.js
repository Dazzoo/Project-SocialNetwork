import React from 'react'
import style from './Login.module.css'
import {Form, Field} from 'react-final-form'

class Login extends React.Component{
    onSubmit = (values) =>{
        this.props.LoginThunk(values.email,values.password)
        values.email = ''
        values.password = ''
        console.log(this.state)
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
    return (
        <div>
            <div className={style.Login}>LoginPage</div>
            <Form
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name="email">
                                {({input, meta}) => (
                                    <div>
                                        <input type="text" placeholder="Email" {...input} />
                                        {meta.touched && meta.error && <span className={style.errorText} >{meta.error}</span>}
                                    </div>

                                )}
                                </Field>
                        </div>
                        <div>
                            <Field name="password">
                                {({input, meta}) => (
                                    <div>
                                        <input type="text" placeholder="Password" {...input} />
                                        {meta.touched && meta.error && <span className={style.errorText} >{meta.error}</span>}
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
                        <div>
                            <button type="submit">
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