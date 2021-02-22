import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Posts = [
    {id: 1, likeCount: 3, text:"Сегодня в нашем королевстве все спокойно"},
    {id: 2, likeCount: 2, text:"Сегодня в нашем королевстве все хорошо"},
    {id: 3, likeCount: 6, text:"Сегодня в нашем королевстве война, северяне нападают"},
    {id: 4, likeCount: 2, text:"Сегодня в нашем королевстве война, северяне напали"}
]

const dialogsData = [
    {id: 1, name: 'Monica'},
    {id: 2, name: 'Artem'},
    {id: 3, name: 'Nasty'},
    {id: 4, name: 'Nika'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'Oliver'}
]

const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How do you do bro?'},
    {id: 3, message: 'I would like more, heh)'},
    {id: 4, message: 'Nope, its bad idea.'},
    {id: 5, message: 'I am from Taiwan'},
    {id: 6, message: 'Here we go again'},
];

ReactDOM.render(
  <React.StrictMode>
    <App Posts={Posts} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
