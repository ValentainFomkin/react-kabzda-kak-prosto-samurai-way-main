const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg'
        },
        {
            id: 2,
            name: 'Andrey',
            avatar: 'http://www.rosphoto.com/images/u/articles/1510/7_5.jpg'
        },
        {
            id: 3,
            name: 'Sveta',
            avatar: 'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg'
        },
        {
            id: 4,
            name: 'Sasha',
            avatar: 'http://www.rosphoto.com/images/u/articles/1510/11_2.jpg'
        },
        {
            id: 5,
            name: 'Viktor',
            avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/30d52c581db742197509da30df.jpg'
        },
        {
            id: 6,
            name: 'Valera',
            avatar: 'https://weblinks.ru/wp-content/uploads/2021/04/636fvtrvidk.jpg'
        },
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {

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