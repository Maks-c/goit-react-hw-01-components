import React from 'react';
import PropTypes from 'prop-types';
import {Li,Span} from './UserCardStyle';
const UserCardListItem = ({stats}) => {
    console.log(stats)
    return <>

            <Li  >
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

// UserCardListItem.PropTypes({stats:PropTypes.shape().isRequired})



export default UserCardListItem;