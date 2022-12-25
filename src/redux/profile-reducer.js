const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {

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