import {Ul} from "./friendsStyle";
import PropTypes from "prop-types";
import React from "react";
import FriendListItems from "./friendListItems";

const Friends = ({items}) => {
    return <section>
        <Ul>
            <FriendListItems items={items}/>
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