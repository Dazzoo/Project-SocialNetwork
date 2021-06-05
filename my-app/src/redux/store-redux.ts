import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import profileReducer from './ProfileReducer'
import messageReducer from './MessagesReducer'
import sidebarReducer from './SidebarReducer'
import usersReducer from './usersReducer'
import authReducer from  './authReducer'
import newsReducer from './newsReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    findUsers: usersReducer,
    auth: authReducer,
    news: newsReducer
})
type RootReducersType = typeof reducers
export type RootStateType = ReturnType<RootReducersType>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
