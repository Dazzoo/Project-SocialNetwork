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
const SET_WEATHER = 'SIDEBAR/SET-WEATHER'
const SET_HOUR = 'SIDEBAR/SET-HOUR'
const SET_DATA = 'SIDEBAR/SET-DATA'
const SET_IS_DAY = 'SIDEBAR/SET-IS-DAY'
const SET_CURRENT_WEATHER_ICON = 'SIDEBAR/SET-CURRENT-WEATHER-ICON'




type SidebarType = {friendsOnline: Array<{id: number, name: string}>}
type WeatherType = {product: string,init: string, dataseries: Array<{timepoint: number, cloudcover: number, lifted_index: number,
                    prec_type: string, prec_amount: number, temp2m: number, rh2m: string, wind10m: {direction: string, speed: number},
                    weather: string}>}
type WeatherDataseriesType = {timepoint: number, cloudcover: number, lifted_index: number,
    prec_type: string, prec_amount: number, temp2m: number, rh2m: string, wind10m: {direction: string, speed: number},
    weather: string}
type WeatherIconsType = Array<typeof about_civil_clear | typeof about_civil_cloudy | typeof about_civil_fog
    | typeof about_civil_ishower | typeof about_civil_lightrain | typeof
    about_civil_lightsnow | typeof about_civil_mcloudy | typeof about_civil_oshower | typeof about_civil_pcloudy | typeof about_civil_rain
    | typeof about_civil_rainsnow | typeof about_civil_snow | typeof about_civil_tsrain | typeof about_civil_tstorm>

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
    } as SidebarType,
    currentHour: null as null | string,
    currentData: [] as Array<string>,
    weather: null as null | WeatherType,
    isDay: null as null | boolean,
    WeatherIcons: [about_civil_clear, about_civil_cloudy, about_civil_fog, about_civil_ishower, about_civil_lightrain,
        about_civil_lightsnow, about_civil_mcloudy, about_civil_oshower, about_civil_pcloudy,
        about_civil_rain, about_civil_rainsnow, about_civil_snow, about_civil_tsrain, about_civil_tstorm] as WeatherIconsType,
    currentWeatherIcon: null as any
}

export type initialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type){
        case SET_WEATHER:{
            return {...state,
                weather: action.weather
            }
        }
        case SET_HOUR:{
            return {...state,
                currentHour: action.hour
            }
        }
        case SET_IS_DAY:{
            return {...state,
                isDay: action.boolen
            }
        }
        case SET_DATA:{
            return {...state,
                currentData: action.data
            }
        }
        case SET_CURRENT_WEATHER_ICON:{
            return {...state,
                currentWeatherIcon: action.icon
            }
        }
        default:
            return state
    }
}

type SetWeatherType = {
    type: typeof SET_WEATHER,
    weather: WeatherType
}
export const SetWeather = (weather: WeatherType): SetWeatherType => ({type: SET_WEATHER, weather})
type SetHourType = {
    type: typeof SET_HOUR,
    hour: string
}
export const SetHour = (hour: string): SetHourType => ({type: SET_HOUR, hour})
type SetDataType = {
    type: typeof SET_DATA,
    data: Array<string>

}
export const SetData = (data: Array<string>): SetDataType => ({type: SET_DATA, data})
type IsDayType = {
    type: typeof SET_IS_DAY,
    boolen: boolean
}
export const IsDay = (boolen: boolean): IsDayType => ({type: SET_IS_DAY, boolen})
type SetCurrentWeatherIconType = {
    type: typeof  SET_CURRENT_WEATHER_ICON,
    icon: any
}
export const SetCurrentWeatherIcon = (icon: any): SetCurrentWeatherIconType => ({type: SET_CURRENT_WEATHER_ICON, icon})


export const SetWeatherThunk = () => async (dispatch: any) => {
    try {
        const weatherJson = await SidebarAPI.getWeather()
        dispatch(SetWeather(weatherJson))
        } catch (error) {
        console.log(error.message)
    }

}

export const getCurrentHour = () => (dispatch: any) => {
    let data = new Date()
    let dataArr = data.toString().split(' ')
    let currentTime = dataArr[4].split(':')
    let currentHour = currentTime[0]
    dispatch(SetHour(currentHour))
    dispatch(SetData(dataArr))
}

export const ChooseWeatherPic = (weatherData: WeatherDataseriesType, WeatherIcons: WeatherIconsType) => (dispatch: any) => {      //https://github.com/Yeqzids/7timer-issues/wiki/Wiki   DOCUMENTATION
    let humidity = Number(weatherData.rh2m.replace(/%/g, ''))
    if(weatherData.lifted_index <= -5){
        if(weatherData.prec_amount < 4){
            dispatch(SetCurrentWeatherIcon(WeatherIcons[13]))
        } if(weatherData.prec_amount >= 4){
            dispatch(SetCurrentWeatherIcon(WeatherIcons[12]))
        }
    }
    if(weatherData.prec_type == "snow"){
        if(weatherData.prec_amount <= 4){
            dispatch(SetCurrentWeatherIcon(WeatherIcons[5]))
        } else {
            dispatch(SetCurrentWeatherIcon(WeatherIcons[11]))
        }
    }
    if(weatherData.prec_type == "rain"){
        if(weatherData.prec_amount >= 4){
            dispatch(SetCurrentWeatherIcon(WeatherIcons[9]))
        }
    }
    if(weatherData.prec_type == "frzr" || weatherData.prec_type == "icep"  ){
        dispatch(SetCurrentWeatherIcon(WeatherIcons[10]))
    }
    if([1,2].includes(weatherData.cloudcover) ){                       //Total cloud cover less than 20%
        if(weatherData.prec_type == "rain"){
            dispatch(SetCurrentWeatherIcon(WeatherIcons[3]))
        }else {
            dispatch(SetCurrentWeatherIcon(WeatherIcons[0]))
        }
    }if([3,4,5].includes(weatherData.cloudcover)){                      //Total cloud cover between 20%-60%
        if(weatherData.prec_type == "rain"){
            dispatch(SetCurrentWeatherIcon(WeatherIcons[3]))
        }else {
        if(humidity >= 90){
            dispatch(SetCurrentWeatherIcon(WeatherIcons[2]))
        }else { dispatch(SetCurrentWeatherIcon(WeatherIcons[8]))
        }}
    }if([6,7].includes(weatherData.cloudcover)){                        //Total cloud cover between 60%-80%
        if(weatherData.prec_type == "rain"){
            dispatch(SetCurrentWeatherIcon(WeatherIcons[7]))
        }else { dispatch(SetCurrentWeatherIcon(WeatherIcons[6]))
        }
    }if([8,9].includes(weatherData.cloudcover)){                        //Total cloud cover over over 80%
        if(weatherData.prec_type == "rain"){
            dispatch(SetCurrentWeatherIcon(WeatherIcons[4]))
        }else{ dispatch(SetCurrentWeatherIcon(WeatherIcons[1]))
        }
    }
}



export const IsDayThunk = (currentHour: number) => (dispatch: any) => {
    if(currentHour >= 21 || currentHour <= 5 ){ dispatch(IsDay(false)) }
    else { dispatch(IsDay(true)) }

}


export default sidebarReducer