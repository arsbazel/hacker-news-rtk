import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {AppStore} from "./store/store";

const store = AppStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter></Provider>,
    document.getElementById('root')
);

reportWebVitals();
