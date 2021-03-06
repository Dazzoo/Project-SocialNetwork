
let initialState = {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How do you do bro?'},
            {id: 3, message: 'I would like more, heh)'},
            {id: 4, message: 'Nope, its bad idea.'},
            {id: 5, message: 'I am from Taiwan'},
            {id: 6, message: 'Here we go again'}
        ],
        dialogs: [
            {id: 1, name: 'Monica', avatar: 'https://avas.at.ua/_ph/15/2/454969051.jpg?1614027850'},
            {id: 2, name: 'Artem', avatar: 'http://avatars.mitosa.net/warcraft/039.jpg'},
            {id: 3, name: 'Nasty', avatar: 'https://avatarmaker.net/images/1.png'},
            {id: 4, name: 'Nika', avatar: 'https://pngicon.ru/file/uploads/2_16.png'},
            {id: 5, name: 'Andrey', avatar: 'http://cdn.lowgif.com/full/62784c38bb4af71f-furry-avatars-tumblr.gif'},
            {id: 6, name: 'Oliver', avatar: 'https://avatarfiles.alphacoders.com/244/thumb-244618.jpg'}
        ],
        textArea: ""
}

const messageReducer = (state = initialState, action) => {
    debugger
    switch (action.type){
        case 'ADD-MESSAGE':
            let messageText = state.textArea
            return{
                ...state,
                textArea: "",
                messages: [...state.messages, {id: 7, message: messageText }]
            };
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return{
                ...state,
                textArea: action.newMessage
            };
        default:
            return state;

    }
}


export const AddMessagetActionCreator = () => ({type: 'ADD-MESSAGE'})
export const UpdateNewMessageTextActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text})

export default messageReducer