import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you', likesCount: 50},
        {id: 2, message: 'It\'s my first post', likesCount: 21},

    ]

    let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (

        <div className={s.posts}>
            <div className={s.myPost}>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea name="" id="" cols="" rows=""></textarea>
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
