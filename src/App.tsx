import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";

export type AppPropsType = {
    // posts: PostsProps[]
    // dialogs: DialogsProps[]
    // messages: MessagesProps[]
    _state: {
        profilePages: {
            posts: PostsProps[]
            newPostText: string
        }
        messagesPages: {
            dialogs: DialogsProps[]
            messages: MessagesProps[]
            newMessageText: string
        }
        siteBarPages: {
            friends: FriendsProps[]
        }
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}
export type FriendsProps = {
    id: number
    name: string
    avatar: string
}
export type MessagesProps = {
    id: number
    message: string
}
export type DialogsProps = {
    id: number
    name: string
    avatar: string
}
export type PostsProps = {
    id: number,
    message: string,
    likesCount: number
}

export const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs
                        state={props._state.messagesPages}
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}
                    />}/>
                    <Route path='/profile'
                           element={<Profile
                               profilePages={props._state.profilePages}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/friends' element={<Friends state={props._state.siteBarPages}/>}/>
                </Routes>
            </div>
        </div>

    );
}


