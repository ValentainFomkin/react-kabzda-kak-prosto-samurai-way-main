import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/MessageItem";


export const Dialogs = (props) => {


    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElement = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}