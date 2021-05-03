import React, {useEffect, useState} from 'react'
import WeatherBar from '../Sidebar/Weather/WeatherBar'
import style from './../Sidebar/Weather/Weather.module.css'
import cn from 'classnames'
import about_civil_windy from '../../assets/Weather/about_civil_windy.png'

const Weather = (props) => {

    const [SkyIcon, setSkyIcon] = useState(null)

    useEffect(() => {
        if (props.isDay) { setSkyIcon(style.SkyIconDay) }
        if (!props.isDay) { setSkyIcon(style.SkyIconNight)  }
        props.ChooseWeatherPic(props.weather.dataseries[0],props.WeatherIcons)

    }, [props.isDay])

    return(
        <div>
        {props.weather.dataseries.map((wthr) =>

                <div className={style.WeatherWrapper}>
                    <div className={style.WeatherBar}>
                        <div>
                            {props.currentData ?
                        <span className={style.LocationAndData} >Lviv <div>{props.currentData[2]} {props.currentData[1]}, {props.currentData[0]}</div></span>
                        : null}

                            {wthr.temp2m ?
                            <div className={style.degree} >{wthr.temp2m} &deg;</div>
                            : null }

                        <div className={style.wind} >
                            {wthr.wind10m.speed}
                        <img className={style.windIcon}  src={about_civil_windy} alt="Logo" />
                                {wthr.wind10m.direction}
                        </div>

                            <div className={cn(SkyIcon)} >
                                <img  src={props.currentWeatherIcon} alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>


            )}
        </div>
    )

}

export default Weather