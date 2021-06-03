const ADD_MESSAGE = 'ADD-MESSAGE'

type MessagesType = Array<{id: number, message: Array<string>}>
type DialogsType = Array<{id: number, name: string, avatar: string}>

let initialState = {
        messages: [
            {id: 1, message: ['Hello, i am Monica. Lets meet tomorrow?']},
            {id: 2, message: ['Bro, did you already called her?']},
            {id: 3, message: ['You are so cute)']},
            {id: 4, message: ['Where are you??? I am been waiting for you 40 minutes']},
            {id: 5, message: ['Hey, its Andrey, your best friend from childhood']},
            {id: 6, message: ['My first name is Oliver, dont call me the Ralf']}
        ] as MessagesType,
        dialogs: [
            {id: 1, name: 'Monica', avatar: 'https://avas.at.ua/_ph/15/2/454969051.jpg?1614027850'},
            {id: 2, name: 'Artem', avatar: 'http://avatars.mitosa.net/warcraft/039.jpg'},
            {id: 3, name: 'Nasty', avatar: 'https://avatarmaker.net/images/1.png'},
            {id: 4, name: 'Nika', avatar: 'https://pngicon.ru/file/uploads/2_16.png'},
            {id: 5, name: 'Andrey', avatar: 'http://cdn.lowgif.com/full/62784c38bb4af71f-furry-avatars-tumblr.gif'},
            {id: 6, name: 'Oliver', avatar: 'https://avatarfiles.alphacoders.com/244/thumb-244618.jpg'}
        ] as DialogsType
}

export type initialStateType = typeof initialState

const messageReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type){
        case ADD_MESSAGE:

            return{...state,
                messages: state.messages.map(m => {if(m.id == action.id){ return{id: action.id, message: [...m.message, action.text] }}else{return{id: m.id, message: m.message}}})
            };
        default:
            return state;

    }
}

type AddMessagetActionCreatorType = {
    type: typeof ADD_MESSAGE,
    text: string,
    id: number
}
export const AddMessagetActionCreator = (text: string, id: number): AddMessagetActionCreatorType => ({type: ADD_MESSAGE, text, id})

export default messageReducer