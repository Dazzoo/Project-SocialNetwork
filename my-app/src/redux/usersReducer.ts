import {UserAPI} from './API'
import {UsersType} from '../types/types'
const FOLLOWED = 'USERS/FOLLOWED'
const UNFOLLOWED = 'USERS/UNFOLLOWED'
const SET_USERS = 'USERS/SET-USERS'
const CHANGE_PAGE = 'USERS/CHANGE-PAGE'
const SET_TOTAL_COUNT = 'USERS/SET-TOTAL-COUNT'
const FETCHING = 'USERS/FETCHING'
const IN_PROGRESS_ADD = 'USERS/IN-PROGRESS-ADD'
const IN_PROGRESS_REMOVE = 'USERS/IN-PROGRESS-REMOVE'


let initialState = {
    users: [ ] as UsersType,
    pageSize: 20 as number,
    currentPage: 1 as number,
    totalUsersCount: 2000 as number,
    isFetching: false as boolean,
    inProgress: [] as Array<number>
}

export type initialStateType = typeof initialState

export const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type){
        case FOLLOWED:{
            return {...state,
                users: state.users.map( u => {
                    if(u.id === action.userId)
                        return {...u,
                            followed: false
                        }
                    return u
                })
            }
        }
        case UNFOLLOWED:{
            return {...state,
                users: state.users.map( u => {
                    if(u.id === action.userId)
                        return {...u,
                            followed: true
                        }
                    return u
                })
            }
        }
        case SET_USERS:{
            return {...state,
            users: action.usersList
            }
        }
        case CHANGE_PAGE:{
            return {...state,
                currentPage: action.newCurrentPage
            }
        }
        case SET_TOTAL_COUNT:{
            return {...state,
                totalUsersCount: action.totalCount
            }
        }
        case FETCHING:{
            return {...state,
                isFetching: action.isFetching
            }
        }
        case IN_PROGRESS_ADD:{
            return {...state,
                inProgress: [state.inProgress, action.inProgress]
            }
        }
        case IN_PROGRESS_REMOVE:{
            return {...state,
                inProgress: state.inProgress.filter(userId => userId != action.removeId)
            }
        }
        default:
            return state
        }
}

type FollowType = {
    type: typeof FOLLOWED,
    userId: number
}
export const Follow = (userId: number): FollowType => ({type: FOLLOWED, userId: userId})
type UnfollowType = {
    type: typeof UNFOLLOWED,
    userId: number
}
export const Unfollow = (userId: number): UnfollowType => ({type: UNFOLLOWED, userId: userId})
type SetUsersType = {
    type: typeof SET_USERS,
    usersList: UsersType
}
export const SetUsers = (usersList: UsersType): SetUsersType => ({type: SET_USERS , usersList: usersList})
type ChangePageType = {
    type: typeof CHANGE_PAGE,
    newCurrentPage: number
}
export const ChangePage = (newCurrentPage: number): ChangePageType => ({type: CHANGE_PAGE, newCurrentPage: newCurrentPage})
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_COUNT,
    totalCount: number
}
export const SetTotalUsersCount = (totalCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_COUNT, totalCount: totalCount})
type SetFetchingType = {
    type: typeof FETCHING,
    isFetching: boolean
}
export const SetFetching = (isFetching: boolean): SetFetchingType => ({type: FETCHING, isFetching: isFetching})
type AddInProgressType = {
    type: typeof IN_PROGRESS_ADD,
    inProgress: number
}
export const AddInProgress = (inProgress: number): AddInProgressType => ({type: IN_PROGRESS_ADD, inProgress: inProgress})
type RemoveInProgressType = {
    type: typeof IN_PROGRESS_REMOVE,
    removeId: number
}
export const RemoveInProgress = (removeId: number): RemoveInProgressType => ({type: IN_PROGRESS_REMOVE, removeId})

export const FollowThunk = (id: number) => async (dispatch: any) => {
    try {
        dispatch(AddInProgress(id))
        let data = await UserAPI.deleteFollow(id)
        if (data.resultCode === 0) {
            dispatch(RemoveInProgress(id))
            dispatch(Follow(id))
        }
    } catch (error) {
        console.log(error.message)

    }
}

export const UnfollowThunk = (id: number) => async (dispatch: any) => {
    try {
        dispatch(AddInProgress(id))
        let data = await UserAPI.postFollow(id)
        if (data.resultCode === 0) {
            dispatch(RemoveInProgress(id))
            dispatch(Unfollow(id))
        }
    } catch (error) {
        console.log(error.message)

    }
}

export const GetUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    try {
        dispatch(SetFetching(true))
        let data = await UserAPI.getUsers(currentPage, pageSize)
        dispatch(SetFetching(false))
        dispatch(SetUsers(data.items))
        dispatch(SetTotalUsersCount(data.totalCount))
    } catch (error) {
        console.log(error.message)

    }
}

export const ChangeCurrentPage = (newCurrentPage: number, pageSize: number) => async (dispatch: any) => {
    try {
        dispatch(SetFetching(true))
        dispatch(ChangePage(newCurrentPage))
        let data = await UserAPI.getUsers(newCurrentPage, pageSize)
        dispatch(SetFetching(false))
        dispatch(SetUsers(data.items))
    } catch (error) {
        console.log(error.message)

    }
}


export default usersReducer


