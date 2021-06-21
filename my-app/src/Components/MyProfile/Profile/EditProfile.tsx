import React from 'react'
import {Form, Field} from 'react-final-form'
import {FORM_ERROR} from 'final-form'
import createField from '../../common/Fields/Field'
import style from '../MyProfile.module.css'


const EditProfile = (props) => {

    const initFieldsInfo = {
        fullName: props.profile.fullName,
        aboutMe: props.profile.aboutMe,
        lookingForAJob: props.profile.lookingForAJob,
        lookingForAJobDescription: props.profile.lookingForAJobDescription,
        github: props.profile.contacts.github,
        vk: props.profile.contacts.vk,
        facebook: props.profile.contacts.facebook,
        instagram: props.profile.contacts.instagram,
        twitter: props.profile.contacts.twitter,
        website: props.profile.contacts.website,
        youtube: props.profile.contacts.youtube,
        mainLink: props.profile.contacts.mainLink
    }

    const onSubmit = async (formData) => {
        let profile = props.profileConstructor(formData)
        const response = await props.SetProfileThunk(profile)
        if(response !== 0){
            return { [FORM_ERROR]: (response.data.messages) }
        }
        props.setEditModeProfile(false)

    }

    return (
        <div className={style.editProfileWrapper} >
        <Form
            onSubmit={onSubmit}
            initialValues={initFieldsInfo}
            render={({handleSubmit, submitError}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <button type="submit" className="btn btn-primary" >
                            Save changes
                        </button>
                {submitError && <div className={style.submitError}>{submitError}</div>}
                    </div>
                    <div>
                        Full name: { createField('fullName', 'text', null)}
                    </div>
                    <div>
                        Looking for a job:
                        {<label>
                            <Field
                                name="lookingForAJob"
                                component="input"
                                type="radio"
                                value='yes'
                            />{'yes'}
                            <Field
                                name="lookingForAJob"
                                component="input"
                                type="radio"
                                value='no'
                            />{'no'}
                        </label>}
                    </div>
                    <div>
                        About me : { createField('aboutMe', 'text', null)}
                    </div>
                    <div>
                        What kind of job do you prefer? : { createField('lookingForAJobDescription', 'text', null)}
                    </div>
                    <div>
                        Contacts
                        <div>
                            github: { createField('github', 'text')}
                            vk: { createField('vk', 'text')}
                            facebook: { createField('facebook', 'text')}
                            instagram: { createField('instagram', 'text')}
                            twitter: { createField('twitter', 'text')}
                            website: { createField('website', 'text')}
                            youtube: { createField('youtube', 'text')}
                            mainLink: { createField('mainLink', 'text')}
                        </div>
                    </div>

                </form>

            )}
        />
        </div>
    )
}

export default EditProfile