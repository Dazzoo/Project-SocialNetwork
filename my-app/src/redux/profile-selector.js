

export const TakeProfile = (state) => {
    return state.profilePage.profile
}

export const TakeStatus = (state) => {
    return state.profilePage.status
}

export const TakeProfilePage = (state) => {
    return state.profilePage
}

export const TakePosts = (state) => {
    return state.profilePage.posts
}

export const TakeAuth = (state) => {
    return state.auth.isAuth
}

export const TakeIs0wner = (state) => {
    return state.profilePage.isOwner
}

export const TakeId = (state) => {
    return state.auth.id
}

export const TakeLikedPostsID = (state) => {
    return state.profilePage.likedPostsID
}