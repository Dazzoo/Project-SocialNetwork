import React from 'react'
import style from './Profile.module.css'

const ProfileInfo = (props) => {
    return (
        <div className="d-print-none p-2 bg-primary text-white" >
                {props.profile.fullName ? <div >Full name :</div> : null} <div>{props.profile.fullName ? props.profile.fullName : null}</div>
                {props.profile.aboutMe ? <div >About me :</div> : null} <div>{props.profile.aboutMe ? props.profile.aboutMe : null}</div>
            <div >{props.profile.lookingForAJobDescription ? 'lookingForAJob : ' + props.profile.lookingForAJobDescription : null }</div>
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
        {props.contactTitle + ' : ' + props.contactValue}
    </div>
}

export default ProfileInfo