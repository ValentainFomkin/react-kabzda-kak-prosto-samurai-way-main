import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {siteBarReducer} from "./siteBar-reducer";

let reducers = combineReducers({
    profilePages: profileReducer,
    messagesPages: dialogsReducer,
    siteBarPages: siteBarReducer,
})

export let store = createStore(reducers)
