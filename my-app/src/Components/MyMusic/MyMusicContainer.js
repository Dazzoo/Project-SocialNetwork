import React from 'react'
import MyMusic from  './MyMusic'
import {compose} from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'

class MyMusicContainer extends React.Component {


    render(){
        return (
            <MyMusic {...this.props} />
        )
    }

}




export default compose(withAuthRedirect)(MyMusicContainer)

