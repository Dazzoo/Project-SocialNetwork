import React from 'react'
import Weather from './Weather'
import {SetWeatherThunk, getCurrentHour} from '../../../redux/SidebarReducer'
import {connect} from 'react-redux'
import {PreloaderSkateboardForComponent} from  '../../common/Preloaders/PreloaderSkateboard'

class WeatherContainer extends React.Component {

    componentDidMount(){
        this.props.SetWeatherThunk()
        this.props.getCurrentHour()
    }

    render(){
        if(!this.props.weather){
            return <PreloaderSkateboardForComponent/>
        }
        return <Weather {...this.props} currentHour={this.props.currentHour}  />
    }
}



const mapStateToProps = (state) => {
    return {
        weather: state.sidebar.weather,
        currentHour: state.sidebar.currentHour
    }
}



export default connect(mapStateToProps, {SetWeatherThunk, getCurrentHour})(WeatherContainer)