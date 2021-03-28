

export const TakeUsers = (state) => {
    return state.findUsers.users
}

export const TakePageSize = (state) => {
    return state.findUsers.pageSize
}

export const TakeCurrentPage = (state) => {
    return state.findUsers.currentPage
}

export const TakeTotalUsersCount = (state) => {
    return state.findUsers.totalUsersCount
}

export const TakeIsFetching = (state) => {
    return state.findUsers.isFetching
}

export const TakeInProgress = (state) => {
    return state.findUsers.inProgress
}
