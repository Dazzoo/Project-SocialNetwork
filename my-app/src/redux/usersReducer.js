
let initialState = {
    users: [
        {id: 1, avatar: 'https://cdn62.zvuk.com/pic?type=artist&id=623102&size=600x600&ext=',
            followed: false, userName: 'George Miller', location: {country: 'Japan', city: 'Osaka'}, status: 'I am pretty boy living on the west side' },
        {id: 2, avatar: 'https://cdn62.zvuk.com/pic?type=artist&id=623102&size=600x600&ext=',
            followed: false, userName: 'George Miller', location: {country: 'Japan', city: 'Osaka'}, status: 'I am pretty boy living on the west side' },
        {id: 3, avatar: 'https://cdn62.zvuk.com/pic?type=artist&id=623102&size=600x600&ext=',
            followed: false, userName: 'George Miller', location: {country: 'Japan', city: 'Osaka'}, status: 'I am pretty boy living on the west side' }
    ]

}

const usersReducer = (state = initialState, action) => {
    debugger
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
        default:
            return state
        }
}


export const FollowedAC = (userId) => ({type: 'Followed', userId: userId})
export const UnfollowedAC = (userId) => ({type: 'Unfollowed', userId: userId})

export default usersReducer


