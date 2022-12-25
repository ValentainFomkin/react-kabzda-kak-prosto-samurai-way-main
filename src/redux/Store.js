import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {siteBarReducer} from "./siteBar-reducer";


export let store = {
    _state: {
        profilePages: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 50},
                {id: 2, message: 'It\'s my first post', likesCount: 21},
            ],
            newPostText: '',
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
            newMessageText: ''
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

        },
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
        this.profilePages = profileReducer(this._state.profilePages, action)
        this.messagesPages = dialogsReducer(this._state.messagesPages, action)
        this.siteBarPages = siteBarReducer(this._state.siteBarPages, action)

        this._callSubscriber(this._state)
    }
}


window.store = store