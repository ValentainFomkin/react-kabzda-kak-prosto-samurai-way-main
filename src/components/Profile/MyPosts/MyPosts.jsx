import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you', likesCount: 50},
        {id: 2, message: 'It\'s my first post', likesCount: 21},

    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}
                      id={postData[0].id}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}
                      id={postData[1].id}/>

            </div>
        </div>
    )
}
