import {State} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NewPost, ReadTextArea} from './redux/state'
import {CallBackEntireTree} from './redux/state'


export const RenderEntireTree = (State) => {
    return(
        ReactDOM.render(
            <React.StrictMode>
                <App state={State} newpost={NewPost} readTextArea={ReadTextArea}/>
            </React.StrictMode>,
            document.getElementById('root')
        )
    );
}
RenderEntireTree(State);

CallBackEntireTree(RenderEntireTree);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
