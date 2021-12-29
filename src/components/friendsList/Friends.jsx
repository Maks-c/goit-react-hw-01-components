import PropTypes from 'prop-types';
import {Ul,Li,Image,Span,P} from "./friendsStyle";

const Friends = ({items})=>{
    return <Ul>
        {items.map(item => (
            <Li key={item.id} >
                <Span isOnline={item.isOnline}> {item.isOnline}</Span>
                <Image src={item.avatar} alt={item.name} /><P>{item.name}</P>

            </Li>
        ))}
    </Ul>
}

Friends.propTypes={
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    name: PropTypes.string,
}

export default Friends;