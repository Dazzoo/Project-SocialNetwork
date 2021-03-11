
let initialState = {
    users: [ ],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 2000,
}

const usersReducer = (state = initialState, action) => {
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
        default:
            return state
        }
}


export const FollowedAC = (userId) => ({type: 'Followed', userId: userId})
export const UnfollowedAC = (userId) => ({type: 'Unfollowed', userId: userId})
export const SetUsersAC = (usersList) => ({type: 'SetUsers' , usersList: usersList})
export const ChangePageAC = (newCurrentPage) => ({type: 'ChangePage', newCurrentPage: newCurrentPage})
export const TotalCountAC = (totalCount) => ({type: 'SetTotalCount', totalCount: totalCount})

export default usersReducer


