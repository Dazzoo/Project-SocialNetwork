import React from 'react'
import {connect} from 'react-redux'
import MyNews from './MyNews'
import {SetNewsTrunk} from '../../redux/newsReducer'
import {PreloaderSkateboardForComponent} from '../common/Preloaders/PreloaderSkateboard'

class MyNewsContainer extends React.Component{
    componentDidMount(){
        this.props.SetNewsTrunk()
    }

    render(){

        if(!this.props.newsList){
            return (
                <PreloaderSkateboardForComponent/>
            )
        }
        return(
            <MyNews {...this.props}/>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        newsList: state.news.newsList
    }
}

export default connect(mapStateToProps, {SetNewsTrunk})(MyNewsContainer)