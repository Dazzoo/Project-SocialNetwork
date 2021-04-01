import React, {useState, useEffect} from 'react'
import style from '../MyProfile.module.css'
import FetchingIcon from '../../findUsers/FetchingIcon/FetchingIcon'



const Profile = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const ActivateEditMode = () => {
        setEditMode(true)
    }

    const DeactivateEditMode = () => {
        setEditMode(false)
        props.putStatusThunk(status)
    }

    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={style.Avatar}>
            <img src={props.profile.photos.large ? props.profile.photos.large : 'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
            <div>{props.profile.fullName ? 'FullName: ' + props.profile.fullName : null}</div>
            <div>{props.profile.aboutMe ? 'About me: ' + props.profile.aboutMe : null}</div>
            <div>{props.profile.aboutMe ? <div>lookingForAJob : yes</div> : <div>lookingForAJob : no</div>}</div>
            {editMode === false ?
                <span className={style.status} onClick={ActivateEditMode} >{status ? status : 'How you feeling today?'}</span> :
                <input onChange={OnStatusChange} value={status} onBlur={DeactivateEditMode} autoFocus={true} />
            }
        </div>
    )
}









export default Profile