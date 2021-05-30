import {AuthAPI} from './API'
const SET_USER_DATA = 'AUTH/SET-USER-DATA'
const SET_AUTH = 'AUTH/SET-AUTH'
const IS_FETCHING = 'AUTH/IS-FETCHING'
const INITIALIZE = 'AUTH/INITIALIZE'
const LOGIN_DATA_ERROR = 'AUTH/LOGIN-DATA-ERROR'
const ERROR_MESSAGE = 'AUTH/ERROR-MESSAGE'
const SHOW_OR_HIDE_CAPCHA = 'AUTH/SHOW-OR-HIDE-CAPCHA'
const GET_CAPCHA = 'AUTH/GET-CAPCHA'
const DELETE_AUTH = 'AUTH/DELETE-AUTH'



let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    message: null as Array<string> | null,
    capchaIsRequired: false as boolean,
    capcha: null as string | null,
    isFetching: false as boolean,
    isAuth: false as boolean,
    LoginDataError: false as boolean,
    authRequestIsDone: false as boolean,
    initialized: false as boolean
}

export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type){
        case SET_USER_DATA:{
            return {...state,
                ...action.data
            }
        }
        case SET_AUTH:{
            return {...state,
                isAuth: action.isAuth
            }
        }
        case DELETE_AUTH:{
            return  {...state,
                id: null,
                email: null,
                login: null,
            }
        }
        case  IS_FETCHING:{
            return {...state,
                isFetching: action.isFetching
            }
        }
        case INITIALIZE:{
            return {...state,
                initialized: true
            }
        }
        case LOGIN_DATA_ERROR:{
            return {...state,
                LoginDataError: action.value
            }
        }
        case ERROR_MESSAGE:{
            return  {...state,
                message: action.message
        }
        }
        case SHOW_OR_HIDE_CAPCHA:{
            return  {...state,
                capchaIsRequired: action.booling
            }
        }
        case GET_CAPCHA:
            return {...state,
                capcha: action.url
            }
        default:
            return state
        }
}

type SetUserLoginDataType = {
    type: typeof SET_USER_DATA,
    data: {id: number, email: string, login: string}
}
export const SetUserLoginData = (id: number, email: string, login: string): SetUserLoginDataType => ({type: SET_USER_DATA, data: {id, email, login}})
type SetAuthType = {
    type: typeof SET_AUTH,
    isAuth: boolean
}
export const SetAuth = (isAuth: boolean): SetAuthType => ({type: SET_AUTH, isAuth})
type SetFetchingType = {
    type: typeof IS_FETCHING,
    isFetching: boolean
}
export const SetFetching = (isFetching: boolean): SetFetchingType => ({type: IS_FETCHING, isFetching})
type InitializeType = {
    type: typeof INITIALIZE
}
export const Initialize = (): InitializeType => ({type: INITIALIZE})
type LoginDataErrorType = {
    type: typeof LOGIN_DATA_ERROR,
    value: boolean
}
export const LoginDataError = (value: boolean): LoginDataErrorType => ({type: LOGIN_DATA_ERROR, value})
type LoginErrorMessageType = {
    type: typeof ERROR_MESSAGE,
    message: Array<string>
}
export const LoginErrorMessage = (message: Array<string>): LoginErrorMessageType => ({type: ERROR_MESSAGE , message})
type ShowOrHideCapchaType = {
    type: typeof SHOW_OR_HIDE_CAPCHA,
    booling: boolean
}
export const ShowOrHideCapcha = (booling: boolean): ShowOrHideCapchaType => ({type: SHOW_OR_HIDE_CAPCHA , booling})
type SetCapchaType = {
    type: typeof GET_CAPCHA,
    url: string
}
export const SetCapcha = (url: string): SetCapchaType => ({type: GET_CAPCHA, url})
type DeleteAuthType = {
    type: typeof DELETE_AUTH
}
export const DeleteAuth = (): DeleteAuthType => ({type: DELETE_AUTH})

export const GetCapchaThunk = () => async (dispatch: any) => {
    try {
        let respons = await AuthAPI.getCapcha()
        dispatch(SetCapcha(respons.data.url))
    } catch (error) {
        console.log(error.message)

    }
}

export const SetAuthThunk = () => async (dispatch: any) => {
    try {
        let data = await AuthAPI.getAuth()
        if (data.resultCode === 0) {
            dispatch(SetUserLoginData(data.data.id, data.data.email, data.data.login))
            dispatch(SetAuth(true))
        }
        return null
    } catch (error) {
        console.log(error.message)

    }
}

export const LoginThunk = (email: string, password: string, captcha: boolean) => async (dispatch: any) =>{
    try {
        let response = await AuthAPI.postAuth(email, password, captcha)
        debugger
        if (response.data.resultCode === 0) {
            let data = await AuthAPI.getAuth()
            if (data.resultCode === 0) {
                dispatch(SetUserLoginData(data.data.id, data.data.email, data.data.login))
                dispatch(SetAuth(true))
            }
            dispatch(LoginDataError(false))
            return null
        }
        if (response.data.resultCode === 10) {
            LoginThunk(email, password, captcha)
            let respons = await AuthAPI.getCapcha()
            dispatch(SetCapcha(respons.data.url))
            dispatch(ShowOrHideCapcha(true))
            return null
        }
        else if (response.data.resultCode !== 0) {

            dispatch(LoginDataError(true))
            dispatch(LoginErrorMessage(response.data.messages))
            return null

        }

        return null
    } catch (error) {
        console.log(error.message)

    }
}

export const InitializeApp = () => async (dispatch: any) =>{
    try {
        await dispatch(SetAuthThunk())
        dispatch(Initialize())
    } catch (error) {
        console.log(error.message)

    }
}






export const LogOutThunk = () => async (dispatch: any) => {
    try {
        let response = await AuthAPI.deleteAuth()
        if (response.data.resultCode === 0) {
            dispatch(DeleteAuth())
            dispatch(SetAuth(false))
        }
        return null
    } catch (error) {
        console.log(error.message)

    }
}


export default authReducer


