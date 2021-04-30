import React from 'react'
import Weather from './Weather'
import {SetWeatherThunk, getCurrentHour, IsDayThunk} from '../../../redux/SidebarReducer'
import {connect} from 'react-redux'
import {PreloaderThreeDots} from  '../../common/Preloaders/PreloaderThreeDots'
import style from './Weather.module.css'
import {CurrentHour} from  './../../../redux/sidebar-selector'

class WeatherBarContainer extends React.Component {

    componentDidMount (){
        this.props.SetWeatherThunk()
        this.props.getCurrentHour()
        this.props.IsDayThunk(this.props.currentHour)
        let SkyIcon = null
        if (this.props.isDay) { this.SkyIcon = style.SkyIconDay }
        else { this.SkyIcon = style.SkyIconNight  }
    }
    render(){
        if(!this.props.weather){
            return <PreloaderThreeDots/>
        }
        return <Weather {...this.props} SkyIcon={this.SkyIcon}   />
    }
}



const mapStateToProps = (state) => {
    return {
        weather: state.sidebar.weather,
        currentHour: state.sidebar.currentHour,
        isDay: state.sidebar.isDay
    }
}



export default connect(mapStateToProps, {SetWeatherThunk, getCurrentHour, IsDayThunk})(WeatherBarContainer)