import React from 'react';
import {NavLink} from "react-router-dom";

export const FriendsItem = (props) => {
    let path = '/friends/' + props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>

        </div>
    );
};

