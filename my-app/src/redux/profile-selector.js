

export const TakeProfile = (state) => {
    debugger
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
