import React from 'react';
import {FriendsItem} from "./FriendsItem";

export const Friends = (props) => {

    let friendElements = props.state.friends.map(f => <FriendsItem id={f.id} name={f.name} avatar={f.avatar}/>)

    return (
        <div>
            {friendElements}
        </div>
    )
};

