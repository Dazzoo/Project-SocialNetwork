import { createSelector } from 'reselect'

export const Users = (state) => {
    return state.findUsers.users
}

export const TakeUsers = createSelector(
    Users,
    (users) => { return users

    })

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
