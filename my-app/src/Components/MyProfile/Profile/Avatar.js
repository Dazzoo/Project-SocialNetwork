import React from 'react'
import style from '../MyProfile.module.css'
import cn from 'classnames'


const Avatar = (props) => {
    return (
        <div className={cn(style.Avatar)} >
            <img className={cn(style.avatarIcon, style.gradientBox)} src={props.profile.photos.large ? props.profile.photos.large
                :
                'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
            <div>
                {props.isOwner? <input type="file" className={cn(style.customFileInput)} onChange={props.changeProfilePhoto} />
                    :
                null }
            </div>
        </div>
    )
}

export default Avatar