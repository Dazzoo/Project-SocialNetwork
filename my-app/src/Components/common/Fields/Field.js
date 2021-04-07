import React from 'react'
import {Form, Field} from 'react-final-form'
import style from '../../MyProfile/MyProfile.module.css'


const createField = (name, type) => {
    return (
        <Field name={name}>
            {({input, meta}) => (
                <div  className={style.dsssa} >
                    <input  type={type}  {...input} />
                    {(meta.error || meta.submitError) && meta.touched && (
                        <span className={style.errorText} >{meta.error || meta.submitError}</span>
                    )}
                </div>

            )}
        </Field>)
}

export default createField