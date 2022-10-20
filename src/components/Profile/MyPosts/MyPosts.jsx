import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (

        <div className={s.posts}>
            <div className={s.myPost}>
                My posts
            </div>
            <div className={s.newPosts}>
                New Post
            </div>
            <div>
                <Post message='Hi, how are you?' likesCount={50}/>
                <Post message="It's my first post" likesCount={100}/>
            </div>
        </div>
    )
}
