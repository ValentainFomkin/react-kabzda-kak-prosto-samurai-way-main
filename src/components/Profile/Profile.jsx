import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePages.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profilePages.newPostText}
                // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}
