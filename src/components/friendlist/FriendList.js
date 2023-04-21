import PropTypes from 'prop-types';
import './FriendList';

export default function FriendList({friends}) {
    console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status">{friend.isOnline}</span>
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
        isOnline: PropTypes.string.isRequired,
      })
    ),
  };