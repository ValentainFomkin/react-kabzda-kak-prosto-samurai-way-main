import React from "react";
import s from './../Dialogs.module.css'


export const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
