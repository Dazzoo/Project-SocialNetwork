import {AuthAPI} from './API'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    errorMessage: null,
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
        case  'authRequestIsDone':{
            return {...state,
                authRequestIsDone: action.authRequestIsDone
            }
        }
        case 'INITIALIZE':{
            return {...state,
                initialized: true
            }
        }
        default:
            return state
        }
}


export const SetUserLoginData = (id, email, login) => ({type: 'UserData', data: {id, email, login}})
export const SetAuth = (isAuth) => ({type: 'SetAuth', isAuth})
export const SetErrorMessage = (errorMessage) => ({type: 'LoginError', errorMessage})
export const SetFetching = (isFetching) => ({type: 'isFetching', isFetching})
export const AuthRequestIsDone = (authRequestIsDone) => ({type: 'authRequestIsDone', authRequestIsDone})
export const Initialize = () => ({type: 'INITIALIZE'})

export const DeleteAuth = () => ({type:'DeleteAuth'})

export const SetAuthThunk = () => (dispatch) => {
    return AuthAPI.getAuth()
            .then(data =>{
                if(data.resultCode === 0){
                    dispatch(SetUserLoginData(data.data.id, data.data.email, data.data.login))
                    dispatch(SetAuth(true))
                }
            })

}

export const LoginThunk = (email, password) => (dispatch) =>{
          return AuthAPI.postAuth(email, password)
            .then(response =>{
                if(response.data.resultCode === 0){
                    dispatch(AuthRequestIsDone(true))
                    dispatch(SetErrorMessage(null))
                    AuthAPI.getAuth()
                        .then(data =>{
                            if(data.resultCode === 0){
                                dispatch(SetUserLoginData(data.data.id, data.data.email, data.data.login))
                                dispatch(SetAuth(true))
                            }
                        })
                }
                else{
                    dispatch(SetErrorMessage(response.data.messages))
                    dispatch(AuthRequestIsDone(true))

                }
            })
}

export const InitializeApp = () => (dispatch) =>{
    let promise = dispatch(SetAuthThunk())
        promise.then(() =>{
            dispatch(Initialize())
        })

}






export const LogOutThunk = () => {
    return (dispatch) => {
        AuthAPI.deleteAuth()
            .then(response =>{
                if(response.data.resultCode === 0){
                    dispatch(DeleteAuth())
                    dispatch(SetAuth(false))
                }
            })
    }
}


export default authReducer


