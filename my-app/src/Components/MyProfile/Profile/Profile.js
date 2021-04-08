import React, {useState, useEffect} from 'react'
import style from '../MyProfile.module.css'
import FetchingIcon from '../../findUsers/FetchingIcon/FetchingIcon'
import {Form, Field} from 'react-final-form'
import {FORM_ERROR} from 'final-form'
import createField from '../../common/Fields/Field'
import Avatar from './Avatar'
import EditProfile from './EditProfile'
import ProfileInfo from  './ProfileInfo'



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







    return (
        <div>
            <Avatar {...props} />

            {props.isOwner? <input type="file" className={style.customFileInput} onChange={changeProfilePhoto} />
            :
                null }

            {editModeProfile ?

                <EditProfile {...props} setEditModeProfile={setEditModeProfile} profileConstructor={props.profileConstructor} />

                :

                <ProfileInfo {...props} />
            }
            {editModeProfile? null
                :
                (props.isOwner? <button className="btn btn-primary" onClick={() => setEditModeProfile(true)}>Edit Profile</button> : null) }
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











export default Profile