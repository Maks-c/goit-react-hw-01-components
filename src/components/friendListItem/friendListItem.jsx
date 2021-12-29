import React from 'react';
import {Li,Image,Span,P} from '../friendsList/friendsStyle'
const FriendListItem = ({items}) => {
    return (
      <>
          {items.map(item => (
              <Li key={item.id} >
                  <Span isOnline={item.isOnline}> {item.isOnline}</Span>
                  <Image src={item.avatar} alt={item.name}/><P>{item.name}</P>

              </Li>
          ))}

      </>
    );
};

export default FriendListItem;