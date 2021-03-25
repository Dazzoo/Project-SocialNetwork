import React from 'react'
import style from './Login.module.css'
import {Form, Field} from 'react-final-form'

class Login extends React.Component{
    onSubmit = (e) =>{
        this.props.LoginThunk(e.email,e.password)
        e.email = ''
        e.password = ''
        console.log(this.state)
    }
    validate = (e) =>{
        console.log('validate')
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
}

export default Login