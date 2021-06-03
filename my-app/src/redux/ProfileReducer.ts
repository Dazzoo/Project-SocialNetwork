import {ProfileAPI, AuthAPI} from './API'import {PostType, ContactsType, PhotosType, ProfileType} from '../types/types'const ADD_POST = 'PROFILE/ADD-POST'const UPDATE_PROFILE = 'PROFILE/UPDATE-PROFILE'const UPDATE_STATUS = 'PROFILE/UPDATE-STATUS'const UPDATE_PHOTO = 'PROFILE/UPDATE-PHOTO'const IS_OWNER = 'PROFILE/IS-OWNER'const ADD_LIKED_ID = 'PROFILE/AddLikedId'const REMOVE_LIKED_ID = 'PROFILE/RemoveLikedId'const ADD_ONE_LIKE = 'PROFILE/AddOneLike'const REMOVE_ONE_LIKE = 'PROFILE/RemoveOneLike'const SET_PROFILE = 'PROFILE/SET-PROFILE'let initialState = {        posts: [            {id: 1, likeCount: 3, text: "Сегодня в нашем королевстве все спокойно"},            {id: 2, likeCount: 2, text: "Сегодня в нашем королевстве все хорошо"},            {id: 3, likeCount: 6, text: "Сегодня в нашем королевстве война, северяне нападают"},            {id: 4, likeCount: 2, text: "Сегодня в нашем королевстве война, северяне напали"}        ] as Array<PostType>,        profile: null as any,        status: "Set Status" as string | null,        isOwner: null as null | boolean,        likedPostsID: [] as Array<number>}export type initialStateType = typeof initialStateconst profileReducer = (state = initialState, action: any): initialStateType => {    switch (action.type){        case ADD_POST:            let post = {id: state.posts.length + 1 , likeCount: 0, text: action.text}            return {...state,                posts: [...state.posts, post],        }        case UPDATE_PROFILE:            return {...state,                profile: action.getProfile            }        case UPDATE_STATUS:            return {...state,                status: action.newStatus            }        case UPDATE_PHOTO:            return {...state,                profile: {...state.profile, photos: {...state.profile.photos, large: action.photo}}            }        case IS_OWNER:            return {...state,                isOwner: action.boolen            }        case ADD_LIKED_ID:            return {...state,                likedPostsID: [...state.likedPostsID, action.id]            }        case REMOVE_LIKED_ID:            return {...state,                likedPostsID: [...state.likedPostsID.filter(id => id !== action.id)]            }        case ADD_ONE_LIKE:            return {...state,                posts: state.posts.map(post => {                    if(post.id === action.id){                        post.likeCount = post.likeCount + 1                        return post                    }                    else {                        return post                    }                    }                )}        case REMOVE_ONE_LIKE:            return {...state,                posts: state.posts.map(post => {                        if(post.id === action.id){                            post.likeCount = post.likeCount - 1                            return post                        }                        else {                            return post                        }                    }                )}        case SET_PROFILE:            return {...state,                profile: action.profile            }        default:            return state    }}type AddPostActionCreatorType = {    type: typeof ADD_POST,    text: string}export const AddPostActionCreator = (text: string): AddPostActionCreatorType => ({type: ADD_POST, text})type GetProfileType = {    type: typeof UPDATE_PROFILE,    getProfile: ProfileType}export const GetProfile = (getProfile: ProfileType): GetProfileType => ({type: UPDATE_PROFILE, getProfile: getProfile})type UpdateStatusType = {    type: typeof UPDATE_STATUS,    newStatus: string}export const UpdateStatus = (newStatus: string): UpdateStatusType => ({type: UPDATE_STATUS, newStatus})type UpdatePhotoType = {    type: typeof UPDATE_PHOTO,    photo: PhotosType}export const UpdatePhoto = (photo: PhotosType): UpdatePhotoType => ({type: UPDATE_PHOTO, photo})type SetIsOwnerType = {    type: typeof IS_OWNER,    boolen: boolean}export const SetIsOwner = (boolen: boolean): SetIsOwnerType => ({type: IS_OWNER, boolen})type AddLikedPostType = {    type: typeof ADD_LIKED_ID,    id: number}export const AddLikedPost = (id: number): AddLikedPostType => ({type: ADD_LIKED_ID, id})type RemoveLikedPostType = {    type: typeof REMOVE_LIKED_ID,    id: number}export const RemoveLikedPost = (id: number): RemoveLikedPostType => ({type: REMOVE_LIKED_ID, id })type AddOneLikeType = {    type: typeof ADD_ONE_LIKE,    id: number}export const AddOneLike = (id: number): AddOneLikeType => ({type: ADD_ONE_LIKE, id})type RemoveOneLikeType = {    type: typeof REMOVE_ONE_LIKE,    id: number}export const RemoveOneLike = (id: number): RemoveOneLikeType => ({type: REMOVE_ONE_LIKE, id})type SetProfileType = {    type: typeof SET_PROFILE,    profile: ProfileType}export const SetProfile = (profile: ProfileType): SetProfileType => ({type: SET_PROFILE, profile})export const SetProfileThunk = (profile: any) => async (dispatch: any, getState: any) => {    try {        const response = await ProfileAPI.putProfile(profile)        if (response.data.resultCode === 0) {            const userId = getState().profilePage.profile.userId            dispatch(getProfileThunk(userId))            return 0        }        return response    } catch (error) {        console.log(error.message)    }}export const getProfileThunk = (userId: number) => async (dispatch: any) => {    try {        const data = await ProfileAPI.getProfile(userId)        dispatch(GetProfile(data))    } catch (error) {        console.log(error.message)    }}export const getStatusThunk = (userId: number) => async (dispatch: any) => {    try {        const response = await ProfileAPI.getStatus(userId)        dispatch(UpdateStatus(response.data))        return null    } catch (error) {        console.log(error.message)    }}export const putStatusThunk = (status: string) => async (dispatch: any) => {    try {        const response = await ProfileAPI.putStatus(status)        if (response.data.resultCode === 0) {            dispatch(UpdateStatus(status))        }        return null    } catch (error) {        console.log(error.message)    }}export const savePhoto = (photoFile: any) => async (dispatch: any) => {    try{        const response = await ProfileAPI.putPhoto(photoFile)        if(response.data.resultCode === 0){            dispatch(UpdatePhoto(response.data.data.photos.large))        }    } catch (error) {        console.log(error.message)    }}export default profileReducer