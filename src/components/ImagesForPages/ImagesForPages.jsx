import React from "react";
import s from "../ImagesForPages/ImagesForPages.module.css";


export const ImagesForPages = (props) => {
   
    return (
        <img className={s.photoUnderFriends} src={props.src} alt=""/>
    )
}

