import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addNewMessageActionCreator, onChangeMessageActionCreator} from "../../redux/dialogs-reducer";


export const Dialogs = (props) => {


    let dialogElements = props.state.dialogs.map((d, index) => <DialogItem key={index}
                                                                           avatar={d.avatar}
                                                                           name={d.name}
                                                                           id={d.id}/>)

    let messageElement = props.state.messages.map((m, index) => <Message key={index} message={m.message} id={m.id}/>)

    let newMessageText = props.state.newMessageText

    // let newMessageElement = React.createRef()

    const onChangeMessage = (e) => {
        let value = e.currentTarget.value
        // props.updateNewMessageText(value)
        // props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: value})
        const action = onChangeMessageActionCreator(value);
        props.dispatch(action)
    }

    const addNewMessage = () => {
        // props.addMessage()
        // props.dispatch({type: 'ADD-MESSAGE'})
        const action = addNewMessageActionCreator();
        props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <textarea onChange={onChangeMessage}
                              value={newMessageText}
                              placeholder={'Enter your message'}/>
                </div>
                <div>
                    <button onClick={addNewMessage}>add message
                    </button>
                </div>
            </div>

        </div>
    )
}