import {AuthAPI} from './API'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    LoginDataError: false,
    authRequestIsDone: false,
    initialized: false
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
        case 'DeleteAuth':{
            return  {...state,
                id: null,
                email: null,
                login: null,
            }
        }
        case  'LoginError':{
            return {...state,
                errorMessage: action.errorMessage
            }
        }
        case  'isFetching':{
            return {...state,
                isFetching: action.isFetching
            }
        }
        case 'INITIALIZE':{
            return {...state,
                initialized: true
            }
        }
        case 'LOGIN-DATA-ERROR':{
            return {...state,
                LoginDataError: action.value
            }
        }
        default:
            return state
        }
}


export const SetUserLoginData = (id, email, login) => ({type: 'UserData', data: {id, email, login}})
export const SetAuth = (isAuth) => ({type: 'SetAuth', isAuth})
export const SetFetching = (isFetching) => ({type: 'isFetching', isFetching})
export const Initialize = () => ({type: 'INITIALIZE'})
export const LoginDataError = (value) => ({type: 'LOGIN-DATA-ERROR', value})

export const DeleteAuth = () => ({type:'DeleteAuth'})

export const SetAuthThunk = () => async (dispatch) => {
        let data = await AuthAPI.getAuth()
                if(data.resultCode === 0){
                    dispatch(SetUserLoginData(data.data.id, data.data.email, data.data.login))
                    dispatch(SetAuth(true))}
    return null
}

export const LoginThunk = (email, password) => async (dispatch) =>{
          let response = await AuthAPI.postAuth(email, password)
                if(response.data.resultCode === 0){
                    let data = await AuthAPI.getAuth()
                            if(data.resultCode === 0){
                                dispatch(SetUserLoginData(data.data.id, data.data.email, data.data.login))
                                dispatch(SetAuth(true))
                            }
                    dispatch(LoginDataError(false))
                    return null
                }
                else if(response.data.resultCode !== 0){
                    dispatch(LoginDataError(true))
                    return null
                }

    return null
}

export const InitializeApp = () => async (dispatch) =>{
    await dispatch(SetAuthThunk())
            dispatch(Initialize())

}






export const LogOutThunk = () => async (dispatch) => {
        let response = await AuthAPI.deleteAuth()
                if(response.data.resultCode === 0){
                    dispatch(DeleteAuth())
                    dispatch(SetAuth(false))
                }
    return null
}


export default authReducer


