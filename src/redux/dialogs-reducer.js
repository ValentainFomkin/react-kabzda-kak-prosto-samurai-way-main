const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText,
                likesCount: 23
            }
            if (state.newMessageText) {
                state.messages.push(newMessage)
                state.newMessageText = ''
            }
            return state
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return state.newMessageText = action.newTextForMessage
        }
        default:
            return state
    }

}

export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onChangeMessageActionCreator = (value) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextForMessage: value})