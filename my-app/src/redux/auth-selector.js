

export const TakeIsAuth = (state) => {
    return state.auth.isAuth
}

export const TakeEmail = (state) => {
    return state.auth.email
}

export const TakeErrorMessage = (state) => {
    return state.auth.errorMessage
}

export const TakeIsFetching = (state) => {
    return state.auth.isFetching
}