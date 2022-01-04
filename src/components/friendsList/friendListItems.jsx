import React from "react";
import {Image, Li, P, Span} from "./friendsStyle";


const FriendListItems = ({items}) => {
    return (
        <>
            {items.map(({id, name, isOnline, avatar}) => (
                <Li key={id}>
                    <Span isOnline={isOnline}> {isOnline}</Span>
                    <Image src={avatar} alt={name}/><P>{name}</P>
                </Li>))}
        </>
    );
};

export default FriendListItems;