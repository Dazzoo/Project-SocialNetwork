import React, {useEffect} from 'react'
import about_civil_clear from './../../../assets/Weather/about_civil_clear.png'
import style from './Weather.module.css'
import cn from 'classnames'

const WeatherBar = (props) => {
    useEffect(() => {


    }, [])

    return (
            <div>
                <div>
                    <span>Lviv</span>

                    {props.weather.dataseries[0].temp2m ?
                        <div className={style.degree} >{props.weather.dataseries[0].temp2m} &deg;</div>
                        : null }
                    <div className={cn(props.SkyIcon)} >  <img  src={about_civil_clear} alt="Logo" /> </div>

                </div>


            </div>
            )
}

export default WeatherBar