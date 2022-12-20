import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <img className={s.avatar} src={props.avatar}/>
            <NavLink className={s.navLinkTwo} to={path}> {props.name}</NavLink>

        </div>
    )

}
