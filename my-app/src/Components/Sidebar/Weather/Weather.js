import React, {useEffect, useState} from 'react'
import style from './Weather.module.css'
import cn from 'classnames'
import about_civil_windy from '../../../assets/Weather/about_civil_windy.png'

const WeatherBar = (props) => {
    const [SkyIcon, setSkyIcon] = useState(null)

    useEffect(() => {
        if (props.isDay) { setSkyIcon(style.SkyIconDay) }
        if (!props.isDay) { setSkyIcon(style.SkyIconNight)  }
        props.ChooseWeatherPic(props.weather.dataseries[0],props.WeatherIcons)

    }, [props.isDay])


    return (
        <div className={style.WeatherWrapper}>
                <div className={style.WeatherBar}>
                    <div>
                         {props.currentData ? <span className={style.LocationAndData} >Lviv <div>{props.currentData[2]} {props.currentData[1]}, {props.currentData[0]}</div></span> : null}

                                {props.weather.dataseries[0].temp2m ?
                                    <div className={style.degree} >{props.weather.dataseries[0].temp2m} &deg;</div>
                                    : null }
                    <div className={style.wind} >{props.weather.dataseries[0].wind10m.speed} <img className={style.windIcon}  src={about_civil_windy} alt="Logo" />{props.weather.dataseries[0].wind10m.direction}</div>
                        <div className={cn(SkyIcon)} >  <img  src={props.currentWeatherIcon} alt="Logo" /> </div>

                    </div>
                </div>
        </div>
            )
}

export default WeatherBar