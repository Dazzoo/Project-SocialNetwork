import {RootStateType} from '../redux/store-redux'

export const TakeProfile = (state: RootStateType) => {
    return state.profilePage.profile
}

export const TakeStatus = (state: RootStateType) => {
    return state.profilePage.status
}

export const TakeProfilePage = (state: RootStateType) => {
    return state.profilePage
}

export const TakePosts = (state: RootStateType) => {
    return state.profilePage.posts
}

export const TakeAuth = (state: RootStateType) => {
    return state.auth.isAuth
}

export const TakeIs0wner = (state: RootStateType) => {
    return state.profilePage.isOwner
}

export const TakeId = (state: RootStateType) => {
    return state.auth.id
}

export const TakeLikedPostsID = (state: RootStateType) => {
    return state.profilePage.likedPostsID
}
