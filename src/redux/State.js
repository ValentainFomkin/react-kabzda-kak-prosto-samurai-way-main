const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


export let store = {
    _state: {
        profilePages: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 50},
                {id: 2, message: 'It\'s my first post', likesCount: 21},
            ],
            newPostText: 'it-kamasutra',
        },
        messagesPages: {
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
            newMessageText: 'Hi Valya'
        },
        siteBarPages: {
            friends: [
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
            ]

        }

    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePages.newPostText,
                likesCount: 123
            }
            if (this._state.profilePages.newPostText) {
                this._state.profilePages.posts.push(newPost)
                this._state.profilePages.newPostText = ''
            }
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePages.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.messagesPages.newMessageText,
                likesCount: 23
            }
            if (this._state.messagesPages.newMessageText) {
                this._state.messagesPages.messages.push(newMessage)
                this._state.messagesPages.newMessageText = ''
            }
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPages.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (value) => ({type: UPDATE_NEW_POST_TEXT, newText: value})
export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onChangeMessageActionCreator = (value) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: value})


// export let state = {
//
//     profilePages: {
//         posts: [
//             {id: 1, message: 'Hi, how are you', likesCount: 50},
//             {id: 2, message: 'It\'s my first post', likesCount: 21},
//
//         ],
//         newPostText: 'it-kamasutra'
//     },
//     messagesPages: {
//         dialogs: [
//             {
//                 id: 1,
//                 name: 'Dimych',
//                 avatar: 'https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg'
//             },
//             {
//                 id: 2,
//                 name: 'Andrey',
//                 avatar: 'http://www.rosphoto.com/images/u/articles/1510/7_5.jpg'
//             },
//             {
//                 id: 3,
//                 name: 'Sveta',
//                 avatar: 'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg'
//             },
//             {
//                 id: 4,
//                 name: 'Sasha',
//                 avatar: 'http://www.rosphoto.com/images/u/articles/1510/11_2.jpg'
//             },
//             {
//                 id: 5,
//                 name: 'Viktor',
//                 avatar: 'https://vjoy.cc/wp-content/uploads/2020/10/30d52c581db742197509da30df.jpg'
//             },
//             {
//                 id: 6,
//                 name: 'Valera',
//                 avatar: 'https://weblinks.ru/wp-content/uploads/2021/04/636fvtrvidk.jpg'
//             },
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it-kamasutra'},
//             {id: 3, message: 'Yo'},
//         ],
//         newMessageText: 'Hi Valya'
//     },
//     siteBarPages: {
//         friends: [
//             {
//                 id: 1,
//                 name: 'Dimych',
//                 avatar: 'https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg'
//             },
//             {
//                 id: 2,
//                 name: 'Andrey',
//                 avatar: 'http://www.rosphoto.com/images/u/articles/1510/7_5.jpg'
//             },
//             {
//                 id: 3,
//                 name: 'Sveta',
//                 avatar: 'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg'
//             },
//         ]
//
//     }
//
// }

window.store = store

// export const addPost = () => {
//
//     let newPost = {
//         id: 3,
//         message: state.profilePages.newPostText,
//         likesCount: 123
//     }
//     if (state.profilePages.newPostText) {
//         state.profilePages.posts.push(newPost)
//         state.profilePages.newPostText = ''
//     }
//
//     renderEntireTree(state)
//
// }
//
// export const addMessage = () => {
//
//     let newMessage = {
//         id: 4,
//         message: state.messagesPages.newMessageText,
//         likesCount: 23
//     }
//     if (state.messagesPages.newMessageText) {
//         state.messagesPages.messages.push(newMessage)
//         state.messagesPages.newMessageText = ''
//     }
//
//
//     renderEntireTree(state)
//
// }
//
// export const updateNewMessageText = (newText) => {
//     state.messagesPages.newMessageText = newText
//     renderEntireTree(state)
// }
//
// export const updateNewPostText = (newText) => {
//     state.profilePages.newPostText = newText
//     renderEntireTree(state)
// }
//
// export const subscribe = (observer) => {
//     renderEntireTree = observer
// }