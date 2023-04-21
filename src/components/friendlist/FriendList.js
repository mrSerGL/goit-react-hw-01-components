import PropTypes from 'prop-types';
import './FriendList.css';

// ===== styles ======

const isOnlineStl = {
  'background': 'green',
};
const isOfflineStl = 'yellow';

// ===== func =====

export default function FriendList({friends}) {



  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>

          {friend.isOnline ?
          <span className="status" style={isOnlineStl}>{friend.isOnline}</span> :
          <span className="status" style={{background: isOfflineStl }}>{friend.isOnline}</span>
          }
  
          {/* <span className="status" style={stl}>{friend.isOnline}</span> */}
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        // isOnline: PropTypes.string.isRequired,
      })
    ),
  };