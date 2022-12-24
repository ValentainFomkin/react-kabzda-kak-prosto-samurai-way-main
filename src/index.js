import React from 'react';
import './index.css';
import {store} from "./redux/State";

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}
                 addMessage={store.addMessage}
                 updateNewMessageText={store.updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


renderEntireTree(store._state)

store.subscribe(renderEntireTree)