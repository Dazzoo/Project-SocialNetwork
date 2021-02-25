import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NewPost, ReadTextArea} from './redux/state'


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
