import React from 'react'
import style from '../MyProfile.module.css'


const Avatar = (props) => {
    return (
        <div className={`${style.Avatar}  `} >
            <img className={`${style.avatarIcon} `} src={props.profile.photos.large ? props.profile.photos.large
                :
                'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
        </div>
    )
}

export default Avatar