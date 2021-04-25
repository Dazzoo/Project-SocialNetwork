import {SidebarAPI} from './API'


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
    weather: null
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
        default:
            return state
    }
}

export const SetWeather = (weather) => ({type: 'SIDEBAR-SET-WEATHER', weather})
export const SetHour = (hour) => ({type: 'SIDEBAR-SET-HOUR', hour})

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
}



export default sidebarReducer