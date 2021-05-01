import {SidebarAPI} from './API'
import about_civil_clear from './../assets/Weather/about_civil_clear.png'
import about_civil_cloudy from './../assets/Weather/about_civil_cloudy.png'
import about_civil_fog from './../assets/Weather/about_civil_fog.png'
import about_civil_ishower from './../assets/Weather/about_civil_ishower.png'
import about_civil_lightrain from './../assets/Weather/about_civil_lightrain.png'
import about_civil_lightsnow from './../assets/Weather/about_civil_lightsnow.png'
import about_civil_mcloudy from './../assets/Weather/about_civil_mcloudy.png'
import about_civil_oshower from './../assets/Weather/about_civil_oshower.png'
import about_civil_pcloudy from './../assets/Weather/about_civil_pcloudy.png'
import about_civil_rain from './../assets/Weather/about_civil_rain.png'
import about_civil_rainsnow from './../assets/Weather/about_civil_rainsnow.png'
import about_civil_snow from './../assets/Weather/about_civil_snow.png'
import about_civil_tsrain from './../assets/Weather/about_civil_tsrain.png'
import about_civil_tstorm from './../assets/Weather/about_civil_tstorm.png'


let initialState = {
    Sidebar: {
        friendsOnline: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'George'},
            {id: 3, name: 'Diona'},
            {id: 4, name: 'Nika'},
            {id: 5, name: 'Nasty'},
            {id: 6, name: 'Monica'}
        ]
    },
    currentHour: null,
    currentData: [],
    weather: null,
    isDay: null,
    WeatherIcons: [about_civil_clear, about_civil_cloudy, about_civil_fog, about_civil_ishower, about_civil_lightrain,
        about_civil_lightsnow, about_civil_mcloudy, about_civil_oshower, about_civil_pcloudy,
        about_civil_rain, about_civil_rainsnow, about_civil_snow, about_civil_tsrain, about_civil_tstorm],
    currentWeatherIcon: null
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SIDEBAR-SET-WEATHER':{
            return {...state,
                weather: action.weather
            }
        }
        case 'SIDEBAR-SET-HOUR':{
            return {...state,
                currentHour: action.hour
            }
        }
        case 'SIDEBAR-SET-IS-DAY':{
            return {...state,
                isDay: action.boolen
            }
        }
        case 'SIDEBAR-SET-DATA':{
            return {...state,
                currentData: action.data
            }
        }
        case 'SIDEBAR-SET-CURRENT-WEATHER-ICON':{
            return {...state,
                currentWeatherIcon: action.icon
            }
        }
        default:
            return state
    }
}

export const SetWeather = (weather) => ({type: 'SIDEBAR-SET-WEATHER', weather})
export const SetHour = (hour) => ({type: 'SIDEBAR-SET-HOUR', hour})
export const SetData = (data) => ({type: 'SIDEBAR-SET-DATA', data})
export const IsDay = (boolen) => ({type: 'SIDEBAR-SET-IS-DAY', boolen})
export const SetCurrentWeatherIcon = (icon) => ({type: 'SIDEBAR-SET-CURRENT-WEATHER-ICON', icon})


export const SetWeatherThunk = () => async (dispatch) => {
    try {
        const weatherJson = await SidebarAPI.getWeather()
        dispatch(SetWeather(weatherJson))
        } catch (error) {
        console.log(error.message)
    }

}

export const getCurrentHour = () => (dispatch) => {
    let data = new Date()
    let dataArr = data.toString().split(' ')
    let currentTime = dataArr[4].split(':')
    let currentHour = currentTime[0]
    dispatch(SetHour(currentHour))
    dispatch(SetData(dataArr))
}

export const ChooseWeatherPic = (weatherData, WeatherIcons) => (dispatch) => {
    if([1,2].includes(weatherData.cloudcover) ){
        dispatch(SetCurrentWeatherIcon(WeatherIcons[0]))

    }if([3,4,5].includes(weatherData.cloudcover)){
            dispatch(SetCurrentWeatherIcon(WeatherIcons[8]))
    }if([6,7].includes(weatherData.cloudcover)){
        dispatch(SetCurrentWeatherIcon(WeatherIcons[6]))
    }if([8,9].includes(weatherData.cloudcover)){
        dispatch(SetCurrentWeatherIcon(WeatherIcons[1]))
    }
}



export const IsDayThunk = (currentHour) => (dispatch) => {
    if(currentHour >= 21 || currentHour <= 5 ){ dispatch(IsDay(false)) }
    else { dispatch(IsDay(true)) }

}


export default sidebarReducer