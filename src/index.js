// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import store from "./Redux/store/index";

window.onload = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
        , document.getElementById('app'));
    };
