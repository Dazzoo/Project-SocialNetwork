import {AuthAPI} from './API'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case 'UserData':{
            return {...state,
                ...action.data
            }
        }
        case 'SetAuth':{
            return {...state,
                isAuth: action.isAuth
            }
        }
        default:
            return state
        }
}


export const SetUserLoginData = (id, email, login) => ({type: 'UserData', data: {id, email, login}})
export const SetAuth = (isAuth) => ({type: 'SetAuth', isAuth})

export const SetAuthThunk = () => {
    return (dispatch) =>{
        AuthAPI.getAuth()
        .then(data =>{
            if(data.resultCode === 0){
                dispatch(SetUserLoginData(data.data.id, data.data.email, data.data.login))
                dispatch(SetAuth(true))
            }

        })
    }
}

export default authReducer


