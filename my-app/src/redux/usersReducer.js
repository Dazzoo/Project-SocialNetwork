
let initialState = {
    users: [ ]

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
        default:
            return state
        }
}


export const FollowedAC = (userId) => ({type: 'Followed', userId: userId})
export const UnfollowedAC = (userId) => ({type: 'Unfollowed', userId: userId})
export const SetUsersAC = (usersList) => ({type: 'SetUsers' , usersList: usersList})

export default usersReducer


