import {UserAPI} from './API'



let initialState = {
    users: [ ],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 2000,
    isFetching: false,
    inProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case 'Followed':{
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
        case 'Unfollowed':{
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
        case 'SetUsers':{
            return {...state,
            users: action.usersList
            }
        }
        case 'ChangePage':{
            return {...state,
                currentPage: action.newCurrentPage
            }
        }
        case 'SetTotalCount':{
            return {...state,
                totalUsersCount: action.totalCount
            }
        }
        case 'Fetching':{
            return {...state,
                isFetching: action.isFetching
            }
        }
        case 'InProgressADD':{
            return {...state,
                inProgress: [state.inProgress, action.inProgress]
            }
        }
        case 'InProgressREMOVE':{
            return {...state,
                inProgress: state.inProgress.filter(userId => userId != action.removeId)
            }
        }
        default:
            return state
        }
}


export const Follow = (userId) => ({type: 'Followed', userId: userId})
export const Unfollow = (userId) => ({type: 'Unfollowed', userId: userId})
export const SetUsers = (usersList) => ({type: 'SetUsers' , usersList: usersList})
export const ChangePage = (newCurrentPage) => ({type: 'ChangePage', newCurrentPage: newCurrentPage})
export const SetTotalUsersCount = (totalCount) => ({type: 'SetTotalCount', totalCount: totalCount})
export const SetFetching = (isFetching) => ({type: 'Fetching', isFetching: isFetching})
export const AddInProgress = (inProgress) => ({type: 'InProgressADD', inProgress: inProgress})
export const RemoveInProgress = (removeId) => ({type: 'InProgressREMOVE', removeId})

export const FollowThunk = (id) => async (dispatch) => {
         dispatch(AddInProgress(id))
         let data = await UserAPI.deleteFollow(id)
                 if(data.resultCode === 0){
                     dispatch(RemoveInProgress(id))
                     dispatch(Follow(id))
                 }
}

export const UnfollowThunk = (id) => async (dispatch) => {
        dispatch(AddInProgress(id))
        let data = await UserAPI.postFollow(id)
                if(data.resultCode === 0){
                    dispatch(RemoveInProgress(id))
                    dispatch(Unfollow(id))
                }

}

export const GetUsers = (currentPage, pageSize) => async (dispatch) => {
        dispatch(SetFetching(true))
        let data = await UserAPI.getUsers(currentPage, pageSize)
            dispatch(SetFetching(false))
            dispatch(SetUsers(data.items))
            dispatch(SetTotalUsersCount(data.totalCount))
}

export const ChangeCurrentPage = (newCurrentPage, pageSize) => async (dispatch) => {
            dispatch(SetFetching(true))
            dispatch(ChangePage(newCurrentPage))
            let data = await UserAPI.getUsers(newCurrentPage, pageSize)
            dispatch(SetFetching(false))
            dispatch(SetUsers(data.items))
}


export default usersReducer


