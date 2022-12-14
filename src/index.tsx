import React from 'react';
import './index.css';
import {store} from "./redux/Store";

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


const renderEntireTree = (state: any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App _state={store._state}
                 dispatch={store.dispatch.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
                // addMessage={store.addMessage.bind(store)}
                // updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})