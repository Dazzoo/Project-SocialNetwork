import React from 'react'
import style from '../MyProfile.module.css'
import FetchingIcon from '../../findUsers/FetchingIcon/FetchingIcon'

class Profile extends React.Component{
    state = {
        editMode: false
    }

    ActivateStatus(){
        this.setState({editMode: true})
    }

    UnActivateStatus(){
        this.setState({editMode: false})
    }

    render() {
        if(!this.props.profile){
            return (
                <FetchingIcon/>

            )
        }
        return (
            <div className={style.Avatar}>
                <img src={this.props.profile.photos.large? this.props.profile.photos.large : 'https://www.uniprep.cz/sites/default/files/public/pictures/picture-51-1423427108.png'}/>
                <div>{this.props.profile.fullName ? 'FullName: ' + this.props.profile.fullName : null}</div>
                <div>{this.props.profile.aboutMe ? 'About me: ' + this.props.profile.aboutMe : null}</div>
                <div>{this.props.profile.aboutMe ? <div>lookingForAJob : yes</div> : <div>lookingForAJob : no</div>}</div>
                {this.state.editMode === false ?
                    <span className={style.status} onClick={this.ActivateStatus.bind(this)} >{this.props.status}</span> :
                    <input autoFocus={true} onBlur={this.UnActivateStatus.bind(this)} value={this.props.status} />}
            </div>
        )
    }


}

export default Profile