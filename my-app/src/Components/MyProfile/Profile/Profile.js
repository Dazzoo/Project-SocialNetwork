import React, {useState, useEffect} from 'react'
import style from '../MyProfile.module.css'
import FetchingIcon from '../../findUsers/FetchingIcon/FetchingIcon'
import {Form, Field} from 'react-final-form'
import {FORM_ERROR} from 'final-form'
import createField from '../../common/Fields/Field'



const Profile = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    let [editModeProfile, setEditModeProfile] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const ActivateEditMode = () => {
        if(props.isOwner){
            setEditMode(true)
        }
    }

    const DeactivateEditMode = () => {
        setEditMode(false)
        props.putStatusThunk(status)
    }

    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const changeProfilePhoto = (e) => {
        if (e.target.files.length)(
            props.savePhoto(e.target.files[0])
        )
    }


    const onSubmit = (formData) => {
        props.SetProfileThunk(props.profileConstructor(formData))
        setEditModeProfile(false)

    }

    const validate = (values) => {
        let validateOnSymbol = (symbol,name) => {
            if(name && values.name.indexOf(symbol) === -1){
                return {name: 'Please, enter valid link'}
            }}
        validateOnSymbol('.',values.github)
        validateOnSymbol('.',values.vk)
        validateOnSymbol('.',values.facebook)
        validateOnSymbol('.',values.instagram)
        validateOnSymbol('.',values.twitter)
        validateOnSymbol('.',values.website)
        validateOnSymbol('.',values.youtube)
        validateOnSymbol('.',values.mainLink)

    }

    const initFieldsInfo = {
        fullName: props.profile.fullName,
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



    return (
        <div className={style.Avatar}>
            <img src={props.profile.photos.large ? props.profile.photos.large
                :
                'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
            {props.isOwner? <input type="file" className={style.customFileInput} onChange={changeProfilePhoto} />
            :
                null }
            {editModeProfile? null
                :
                <button onClick={() => setEditModeProfile(true)}>editProfile</button> }
            {editModeProfile ?

                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={initFieldsInfo}
                    render={({handleSubmit, submitError}) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <button type="submit" className="btn btn-success" >
                                    Save changes
                                </button>
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

                :
                <div>
                    <div>{props.profile.fullName ? 'FullName: ' + props.profile.fullName : null}</div>
                    <div>{props.profile.aboutMe ? 'About me: ' + props.profile.aboutMe : null}</div>
                    <div>{props.profile.lookingForAJob ? 'lookingForAJob : ' + props.profile.lookingForAJobDescription : null }</div>
                    <div>{Object.keys(props.profile.contacts).map(key => {
                        if(props.profile.contacts[key] !== null){
                            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                        }
                    })}</div>
                </div>
            }
            {editModeProfile ?
                null
                :
                (!editMode ?
                <span className={style.status} onClick={ActivateEditMode} >{status ? status : '____________________'}</span>
                    :
                <input onChange={OnStatusChange} value={status} onBlur={DeactivateEditMode} autoFocus={true} />)
            }

        </div>
    )
}

const Contact = (props) => {
    return <div>
        {props.contactTitle + ' : ' + props.contactValue}
    </div>
}









export default Profile