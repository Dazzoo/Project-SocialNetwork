import store from './redux/store-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom";


let state = store.getState()


        ReactDOM.render(
            <React.StrictMode>
                    <App state={state}/>
            </React.StrictMode>,
            document.getElementById('bodyRoot')


        )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
