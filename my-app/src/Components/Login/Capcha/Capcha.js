import React from 'react'
import {Form, Field} from 'react-final-form'
import style from '../Login.module.css'


const Capcha = (props) => {



    return (
        <div className={style.capcha} >
            <img src={props.capcha} />

                        <Field name="capcha">
                            {({input, meta}) => (
                                <div>
                                    <input type="text" placeholder="capcha" {...input} />
                                    {(meta.error || meta.submitError) && meta.touched && (
                                        <span  >{meta.error || meta.submitError}</span>
                                    )}
                                </div>

                            )}
                        </Field>

            </div>
    )
}

export default Capcha