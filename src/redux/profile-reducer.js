const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 50},
        {id: 2, message: 'It\'s my first post', likesCount: 21},
    ],
    newPostText: '',
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 123
            }
            if (state.newPostText) {
                state.posts.unshift(newPost)
                state.newPostText = ''
            }
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            return state.newPostText = action.newTextForPost
        }
        default:
            return state
    }


}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (value) => ({type: UPDATE_NEW_POST_TEXT, newTextForPost: value})