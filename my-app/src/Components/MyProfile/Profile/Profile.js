import React from 'react'
import style from '../MyProfile.module.css'
import FetchingIcon from '../../findUsers/FetchingIcon/FetchingIcon'

class Profile extends React.Component{
    state = {
        editMode: false,
        status: ""
    }

    ActivateStatus = () =>{
        this.setState({editMode: true})
    }

    UnActivateStatus = () =>{
        this.setState({editMode: false})
        this.props.putStatusThunk(this.state.status)
    }
    UpdateStatus = (e) =>{
        this.setState({status: e.currentTarget.value})
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
                    <span className={style.status} onClick={this.ActivateStatus} >{this.props.status ? this.props.status : '-----'}</span> :
                    <input onChange={this.UpdateStatus} autoFocus={true} onBlur={this.UnActivateStatus} value={this.state.status} />}
            </div>
        )
    }


}

export default Profile