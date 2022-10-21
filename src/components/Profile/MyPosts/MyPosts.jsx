import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message='Hi, how are you?' likesCount={50}/>
                <Post message="It's my first post" likesCount={100}/>
            </div>
        </div>
    )
}
