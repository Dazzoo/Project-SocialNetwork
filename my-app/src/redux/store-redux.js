import {combineReducers, createStore} from 'redux'
import profileReducer from './ProfileReducer'
import messageReducer from './MessagesReducer'
import sidebarReducer from './SidebarReducer'
import usersReducer from './usersReducer'
import authReducer from  './authReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    findUsers: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

export default store
