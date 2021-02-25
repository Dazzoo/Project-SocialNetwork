import {RenderEntireTree} from './../render.js'


const State = {
    MessagePage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How do you do bro?'},
            {id: 3, message: 'I would like more, heh)'},
            {id: 4, message: 'Nope, its bad idea.'},
            {id: 5, message: 'I am from Taiwan'},
            {id: 6, message: 'Here we go again'}
        ],
        dialogs: [
            {id: 1, name: 'Monica', avatar:'https://avas.at.ua/_ph/15/2/454969051.jpg?1614027850'},
            {id: 2, name: 'Artem', avatar:'http://avatars.mitosa.net/warcraft/039.jpg'},
            {id: 3, name: 'Nasty', avatar:'https://avatarmaker.net/images/1.png'},
            {id: 4, name: 'Nika', avatar:'https://pngicon.ru/file/uploads/2_16.png'},
            {id: 5, name: 'Andrey', avatar:'http://cdn.lowgif.com/full/62784c38bb4af71f-furry-avatars-tumblr.gif'},
            {id: 6, name: 'Oliver', avatar:'https://avatarfiles.alphacoders.com/244/thumb-244618.jpg'}
        ]

    },
    PostsPage: {
        posts: [
            {id: 1, likeCount: 3, text:"Сегодня в нашем королевстве все спокойно"},
            {id: 2, likeCount: 2, text:"Сегодня в нашем королевстве все хорошо"},
            {id: 3, likeCount: 6, text:"Сегодня в нашем королевстве война, северяне нападают"},
            {id: 4, likeCount: 2, text:"Сегодня в нашем королевстве война, северяне напали"}
        ],
        textArea: ""
    },
    Friends: {
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

export let NewPost = () => {
    let post = {id: 5, likeCount: 0,text: State.PostsPage.textArea};
    State.PostsPage.posts.push(post);
    RenderEntireTree(State);
}

export let ReadTextArea = (value) => {
    State.PostsPage.textArea = value
    RenderEntireTree(State);
}

window.state = State

export default State;