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
    state: {
        profilePages: {
            posts: PostsProps[]
        }
        messagesPages: {
            dialogs: DialogsProps[]
            messages: MessagesProps[]
        }
        siteBarPages: {
            friends: FriendsProps[]
        }
    }
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
                    <Route path='/dialogs' element={<Dialogs state={props.state.messagesPages}/>}/>
                    <Route path='/profile' element={<Profile state={props.state.profilePages}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/friends' element={<Friends state={props.state.siteBarPages}/>}/>
                </Routes>

            </div>
        </div>

    );
}


