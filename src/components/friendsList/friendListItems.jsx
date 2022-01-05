import React from "react";
import {Image, P, Span} from "./friendsStyle";


const FriendListItems = ({name, status, avatar}) => {
    console.log(status)
    return (
        <>
            <Span status={status}>{status}</Span>
            <Image src={avatar}/>
            <P>{name}</P>

        </>
    );
};

export default FriendListItems;