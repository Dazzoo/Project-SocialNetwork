import React, {useState, useEffect} from 'react'
import style from '../MyProfile.module.css'
import FetchingIcon from '../../findUsers/FetchingIcon/FetchingIcon'
import {Form, Field} from 'react-final-form'
import {FORM_ERROR} from 'final-form'
import createField from '../../common/Fields/Field'
import Avatar from './Avatar'
import EditProfile from './EditProfile'
import ProfileInfo from  './ProfileInfo'
import Status from './Status'


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

    const DeactivateEditMode = (status) => {
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
        <div className={style.gridContainer} >
            <Avatar {...props} />



            {editModeProfile ?

                <EditProfile {...props} setEditModeProfile={setEditModeProfile} profileConstructor={props.profileConstructor} />

                :

                <ProfileInfo {...props} />
            }
            <div className={style.editInfo}>
                {editModeProfile? null
                    :
                    (props.isOwner? <button className="btn btn-primary" onClick={() => setEditModeProfile(true)}>Edit Profile</button> : null) }
                {props.isOwner? <input type="file" className={style.customFileInput} onChange={changeProfilePhoto} />
                    :
                    null }
            </div>
            <div className={style.statusWrapper} >
                {editModeProfile ?
                    null
                    :
                    (!editMode ?
                    <span className={style.status} onClick={ActivateEditMode} >{status ? status : '____________________'}</span>
                        :
                        <Status {...props} DeactivateEditMode={DeactivateEditMode}/>)
                }
            </div>

        </div>
    )
}













export default Profile