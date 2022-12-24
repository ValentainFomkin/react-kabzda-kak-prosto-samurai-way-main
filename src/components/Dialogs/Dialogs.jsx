import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = (props) => {


    let dialogElements = props.state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>)

    let messageElement = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef()

    const onChangeMessage = () => {
        let value = newMessageElement.current.value
        props.updateNewMessageText(value)
    }

    const addNewMessage = () => {
        props.addMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div>
                    <textarea onChange={onChangeMessage} value={props.state.newMessageText} ref={newMessageElement}/>
                </div>
                <div>
                    <button onClick={addNewMessage}>add message
                    </button>
                </div>
            </div>

        </div>
    )
}