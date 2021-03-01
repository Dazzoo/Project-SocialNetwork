

let initialState = {
    Sidebar: {
        friendsOnline: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'George'},
            {id: 3, name: 'Diona'},
            {id: 4, name: 'Nika'},
            {id: 5, name: 'Nasty'},
            {id: 6, name: 'Monica'}
        ]
    }
}

const sidebarReducer = (state = initialState, action) => {
    return state
}



export default sidebarReducer