import React, {useState, useEffect} from 'react'
import style from '../MyProfile.module.css'
import FetchingIcon from '../../findUsers/FetchingIcon/FetchingIcon'



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

    const SwitchEditModeProfile = (e) => {
        if(!editModeProfile){
            setEditModeProfile(true)
        }
        if(editModeProfile){
            setEditModeProfile(false)
        }
    }


    return (
        <div className={style.Avatar}>
            <img src={props.profile.photos.large ? props.profile.photos.large
                :
                'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
            {props.isOwner? <input type="file" className={style.customFileInput} onChange={changeProfilePhoto} />
            :
                null }
            <button onClick={SwitchEditModeProfile} >{editModeProfile? 'save'
                :
                'EditInfo' }</button>
            {editModeProfile ?

                <div>

                </div>

                :

                <div>
                <div>{props.profile.fullName ? 'FullName: ' + props.profile.fullName : null}</div>
                <div>{props.profile.aboutMe ? 'About me: ' + props.profile.aboutMe : null}</div>
                <div>{props.profile.lookingForAJob ? 'lookingForAJob : ' + props.profile.lookingForAJobDescription
                    :
                    null}
                    <div>{Object.keys(props.profile.contacts).map(key => {
                        // return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts(key} />
                    })}</div>
                </div>
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









export default Profile