import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Weather from './Weather'
import {PreloaderSkateboardForComponent} from  '../common/Preloaders/PreloaderSkateboard'
import {SetWeatherThunk, getCurrentHour, IsDayThunk, ChooseWeatherPic} from '../../redux/SidebarReducer'
import style from './../Sidebar/Weather/Weather.module.css'

const WeatherContainer = (props) => {

    useEffect(() => {
        props.SetWeatherThunk()
        props.getCurrentHour()

    }, [])

    if(!props.weather){
        return <PreloaderSkateboardForComponent/>
    }
    return (

        <Weather {...props}/>
    )
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

export default connect(mapStateToProps, {SetWeatherThunk, getCurrentHour, IsDayThunk, ChooseWeatherPic})(WeatherContainer)