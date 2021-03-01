import {combineReducers, createStore} from 'redux'
import profileReducer from './ProfileReducer'
import messageReducer from './MessagesReducer'
import sidebarReducer from './SidebarReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store
