import {ProfileAPI} from './API'let initialState = {        posts: [            {id: 1, likeCount: 3, text: "Сегодня в нашем королевстве все спокойно"},            {id: 2, likeCount: 2, text: "Сегодня в нашем королевстве все хорошо"},            {id: 3, likeCount: 6, text: "Сегодня в нашем королевстве война, северяне нападают"},            {id: 4, likeCount: 2, text: "Сегодня в нашем королевстве война, северяне напали"}        ],        profile: null,        status: "Set Status"}const profileReducer = (state = initialState, action) => {    switch (action.type){        case 'ADD-POST':            let post = {id: 5, likeCount: 0, text: action.text}            return {...state,                posts: [...state.posts, post],        }        case 'UPDATE-PROFILE':            return {...state,                profile: action.getProfile            }        case 'UPDATE-STATUS':            return {...state,                status: action.newStatus            }        default:            return state    }}export const AddPostActionCreator = (text) => ({type: 'ADD-POST', text})export const GetProfile = (getProfile) => ({type: 'UPDATE-PROFILE', getProfile: getProfile})export const UpdateStatus = (newStatus) => ({type: 'UPDATE-STATUS', newStatus})export const getProfileThunk = (userId) => {    return (dispatch) => {        ProfileAPI.getProfile(userId)            .then(data => {dispatch(GetProfile(data))})    }}export const getStatusThunk = (userId) => async (dispatch) => {        let response = await ProfileAPI.getStatus(userId)            dispatch(UpdateStatus(response.data))    return null}export const putStatusThunk = (status) => async (dispatch) => {        let response = await ProfileAPI.putStatus(status)            if(response.data.resultCode === 0){                dispatch(UpdateStatus(status))            }    return null}export default profileReducer