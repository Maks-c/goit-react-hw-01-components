import React from 'react';
import {Li,Span} from '../userCard/UserCardStyle';
const UserCardListItem = ({stats}) => {
    return <>
            <Li>
                <Span>Followers</Span>
                <span>{stats.followers}</span>
            </Li>
            <Li>
                    <Span>Views</Span>
                    <span>{stats.views}</span>
            </Li>
            <Li>
                    <Span>Likes</Span>
                    <span>{stats.likes}</span>
            </Li>
    </>
};

export default UserCardListItem;