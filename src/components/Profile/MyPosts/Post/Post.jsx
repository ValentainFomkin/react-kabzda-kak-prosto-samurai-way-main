import React from "react";
import s from './Post.module.css'

export const Post = (props) => {


    return (

        <div className={s.item}>
            <img src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt=""/>
            <div className={s.likesAndMessage}>
                <span>{props.message}</span>
                <span>{props.likesCount} likes</span>
            </div>


        </div>

    )
}
