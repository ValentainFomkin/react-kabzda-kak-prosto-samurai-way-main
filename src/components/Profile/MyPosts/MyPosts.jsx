import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = (props) => {


    let postElements = props.posts.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}
                                                           id={p.id}/>)


    let newPostElement = React.createRef()

    const addPost = () => {
        // props.addPost()
        props.dispatch({type: 'ADD-POST'})
    }

    const onPostChange = () => {
        let value = newPostElement.current.value
        // props.updateNewPostText(value)
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: value};
        props.dispatch(action)
    }

    return (

        <div className={s.posts}>
            <div className={s.myPost}>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.newPosts}>
                <h3>New Post</h3>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}
