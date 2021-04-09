import React from 'react'
import style from '../MyProfile.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={style.infoWrapper}>
                <div>
                    {props.profile.fullName ? <div className={style.infoName} >Full name :</div> : null} <div className={style.infoValue}>{props.profile.fullName ? props.profile.fullName : null}</div>
                </div>
                <div>
                    {props.profile.aboutMe ? <div className={style.infoName} >About me :</div> : null} <div className={style.infoValue} >{props.profile.aboutMe ? props.profile.aboutMe : null}</div>
                </div>
                <div>
                    {props.profile.lookingForAJobDescription ? <div className={style.infoName} >lookingForAJob :</div> : null } <div className={style.infoValue} >{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : null }</div>
                </div>
            <div >{Object.keys(props.profile.contacts).map(key => {
                if(props.profile.contacts[key] !== null){
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                }
            })}</div>
        </div>
    )
}

const Contact = (props) => {
    return <div>
        <div className={style.infoName} >{props.contactTitle} :</div>    <div className={style.infoValue} >{props.contactValue}</div>
    </div>
}

export default ProfileInfo