
import {Ul} from "./friendsStyle";
import FriendListItem from "../friendListItem/friendListItem";
import PropTypes from "prop-types";

const Friends = ({items}) => {
    return <Ul>
        <FriendListItem items={items}/>
    </Ul>
}

Friends.propTypes = {
    items: PropTypes.array
}

export default Friends;