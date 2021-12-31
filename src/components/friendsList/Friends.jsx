import {Image, Li, P, Span, Ul} from "./friendsStyle";
import PropTypes from "prop-types";
import React from "react";

const Friends = ({items}) => {
    return <section>
        <Ul>
            {items.map(({id, name, isOnline, avatar}) => (
                <Li key={id}>
                    <Span isOnline={isOnline}> {isOnline}</Span>
                    <Image src={avatar} alt={name}/><P>{name}</P>
                </Li>))}
        </Ul>
    </section>
};

Friends.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
}

export default Friends;