import PropTypes from 'prop-types';
import {P} from './UserCardStyle'
import {Ul} from "./UserCardStyle";

import {DivProfile} from "./UserCardStyle";
import {Img} from "./UserCardStyle";
import UserCardListItem from "./userCardListItem";
const UserCard = ({img,name,tag,location,stats}) => {

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
        <UserCardListItem stats={stats}/>
    </Ul>
    </DivProfile>
};

UserCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }).isRequired
};

export default UserCard;