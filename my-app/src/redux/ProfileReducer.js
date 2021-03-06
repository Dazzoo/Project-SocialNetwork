let initialState = {        posts: [            {id: 1, likeCount: 3, text: "Сегодня в нашем королевстве все спокойно"},            {id: 2, likeCount: 2, text: "Сегодня в нашем королевстве все хорошо"},            {id: 3, likeCount: 6, text: "Сегодня в нашем королевстве война, северяне нападают"},            {id: 4, likeCount: 2, text: "Сегодня в нашем королевстве война, северяне напали"}        ],        textArea: ""}const profileReducer = (state = initialState, action) => {    switch (action.type){        case 'ADD-POST':            let post = {id: 5, likeCount: 0, text: state.textArea}            return {...state,                posts: [...state.posts, post],                textArea: ''        }        case 'UPDATE-NEW-POST-TEXT':            return {...state,                textArea: action.newText    }        default:            return state    }}export const AddPostActionCreator = () => ({type: 'ADD-POST'})export const UpdateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})export default profileReducer