import React, {useEffect, useState} from 'react'
import about_civil_clear from './../../../assets/Weather/about_civil_clear.png'
import style from './Weather.module.css'
import cn from 'classnames'

const WeatherBar = (props) => {
    const [SkyIcon, setSkyIcon] = useState(null)

    useEffect(() => {
        if (props.isDay) { setSkyIcon(style.SkyIconDay) }
        if (!props.isDay) { setSkyIcon(style.SkyIconNight)  }

    }, [props.isDay])


    return (
            <div className={style.WeatherBar} >
                <div>
                     {props.currentData ? <span className={style.LocationAndData} >Lviv <div>{props.currentData[2]} {props.currentData[1]}, {props.currentData[0]}</div></span> : null}

                    {props.weather.dataseries[0].temp2m ?
                        <div className={style.degree} >{props.weather.dataseries[1].temp2m} &deg;</div>
                        : null }
                    <div className={cn(SkyIcon)} >  <img  src={about_civil_clear} alt="Logo" /> </div>

                </div>


            </div>
            )
}

export default WeatherBar