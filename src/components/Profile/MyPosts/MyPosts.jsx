import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = (props) => {


    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = React.createRef()


    return (

        <div className={s.posts}>
            <div className={s.myPost}>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button>Add post</button>
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
