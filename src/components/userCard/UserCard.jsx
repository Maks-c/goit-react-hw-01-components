import PropTypes from 'prop-types';
import {Ul, Li, P, Span,DivProfile,Img} from './UserCardStyle';
import React from "react";

const UserCard = ({img, name, tag, location, stats}) => {

    return <DivProfile>
        <div>
            <Img
                src={img}
                alt={name}
                className="avatar"
                width='300'
            />
            <P>{name}</P>
            <P>{tag}</P>
            <P>{location}</P>
        </div>
        <Ul>
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
        </Ul>
    </DivProfile>
};

UserCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired
};

export default UserCard;