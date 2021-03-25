import React from 'react'
import style from './Login.module.css'
import {Form, Field} from 'react-final-form'

const Login = (props) => {
    const onSubmit = (e) =>{
        props.LoginThunk(e.email,e.password)
        e.email = ''
        e.password = ''
    }
    const validate = (e) =>{
        console.log('validate')
    }

    return (
        <div>
            <div className={style.Login}>LoginPage</div>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="email"
                                component="input"
                                type="text"
                                placeholder="Email"
                                />
                        </div>
                        <div>
                            <Field
                                name="password"
                                component="input"
                                type="text"
                                placeholder="Password"
                            />
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

export default Login