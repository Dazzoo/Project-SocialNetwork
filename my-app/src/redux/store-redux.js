import {combineReducers, createStore} from 'redux'
import profileReducer from './ProfileReducer'
import messageReducer from './MessagesReducer'
import sidebarReducer from './SidebarReducer'
import usersReducer from './usersReducer'
import authReducer from  './authReducer'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from "redux"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    findUsers: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
