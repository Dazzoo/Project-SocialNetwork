import React from 'react'
import {Form, Field} from 'react-final-form'
import {FORM_ERROR} from 'final-form'
import style from '../MyProfile.module.css'

const Status = (props) => {

    const onSubmit = (values) => {
        if(values.status && values.status.length > 25){
            return {status: 'Max lenght is 25 symbols'}
        }
        props.DeactivateEditMode(values.status)
    }
    debugger
    const initialValues = {
        status: props.status
    }

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({handleSubmit, submitError}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="status">
                            {({input, meta}) => (
                                <div>
                                    <input   type="text"  {...input} />
                                    <button type="submit" >Save</button>
                                    {(meta.error || meta.submitError) && meta.touched && (
                                        <span className={style.errorText} >{meta.error || meta.submitError}</span>
                                    )}
                                </div>

                            )}
                        </Field>
                    </div>
                    {submitError && <div>{submitError}</div>}

                </form>
            )}
        />
    )
}

export default Status