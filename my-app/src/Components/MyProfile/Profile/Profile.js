import React from 'react'
import style from '../MyProfile.module.css'
import FetchingIcon from '../../findUsers/FetchingIcon/FetchingIcon'

const Profile = (props) => {
    if(!props.profile){
        return (
        <FetchingIcon/>

        )
    }
    return (
        <div className={style.Avatar}>
            <img src={props.profile.photos.large? props.profile.photos.large : 'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
            <div>{props.profile.fullName ? 'FullName: ' + props.profile.fullName : null}</div>
            <div>{props.profile.aboutMe ? 'About me: ' + props.profile.aboutMe : null}</div>
            <div>{props.profile.aboutMe ? <div>lookingForAJob : yes</div> : <div>lookingForAJob : no</div>}</div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Profile