import PropTypes from 'prop-types';
import {P} from './UserCardStyle'
import {Ul} from "./UserCardStyle";

import {DivProfile} from "./UserCardStyle";
import {Img} from "./UserCardStyle";
import UserCardListItem from "../userCardListItem/userCardListItem";
const UserCard = ({user}) => {

return <DivProfile>
    <div>
        <Img
            src={user.avatar}
            alt={user.username}
            className="avatar"
            width='300'
        />
        <P>{user.username}</P>
        <P>{user.tag}</P>
        <P>{user.location}</P>
    </div>
    <Ul >
        <UserCardListItem stats={user.stats}/>
    </Ul>
    </DivProfile>
};

UserCard.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats:PropTypes.arrayOf(PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }))
};

export default UserCard;