import React from 'react'
import style from '../MyProfile.module.css'

const Profile = (props) => {
    return (
        <div className={style.Avatar}>
            <img src={props.profile.photos.large}/>
        </div>
    )
}

export default Profile