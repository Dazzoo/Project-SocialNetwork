import React from 'react'
import Weather from './Weather'
import {SetWeatherThunk, getCurrentHour, IsDayThunk, ChooseWeatherPic} from '../../../redux/SidebarReducer'
import {connect} from 'react-redux'
import {PreloaderThreeDots} from  '../../common/Preloaders/PreloaderThreeDots'
import style from './Weather.module.css'
import {CurrentHour} from  './../../../redux/sidebar-selector'

class WeatherBarContainer extends React.Component {

    componentDidMount(){
        this.props.SetWeatherThunk()
        this.props.getCurrentHour()
    }
    componentDidUpdate(){
        this.props.IsDayThunk(this.props.currentHour)

    }

    render(){
        if(!this.props.weather){
            return <PreloaderThreeDots/>
        }
        return <Weather {...this.props}   />
    }
}



const mapStateToProps = (state) => {
    return {
        weather: state.sidebar.weather,
        currentHour: state.sidebar.currentHour,
        isDay: state.sidebar.isDay,
        currentData: state.sidebar.currentData,
        WeatherIcons: state.sidebar.WeatherIcons,
        currentWeatherIcon: state.sidebar.currentWeatherIcon
    }
}



export default connect(mapStateToProps, {SetWeatherThunk, getCurrentHour, IsDayThunk, ChooseWeatherPic})(WeatherBarContainer)