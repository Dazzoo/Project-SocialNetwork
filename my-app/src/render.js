import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NewPost} from './redux/state'


export const rerender = (State) => {
    return(
        ReactDOM.render(
            <React.StrictMode>
                <App state={State} newpost={NewPost}/>
            </React.StrictMode>,
            document.getElementById('root')
        )
    );

}
