import React from "react";
import s from './Navdar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends'>Friends</NavLink>
                <div className={s.photoUnderFriends}>
                    <img src="https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg"
                         alt=""/>
                    <img
                        src="https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg"
                        alt=""/>
                    <img src="https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg"
                         alt=""/>
                </div>


            </div>
        </nav>
    )
}

