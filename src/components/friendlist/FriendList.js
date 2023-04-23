import PropTypes from 'prop-types';
import css from './FriendList.module.css';

// ===== styles ======

const isOnlineStl = {
  background: 'green',
};
const isOfflineStl = 'yellow';

// ===== func =====

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          {friend.isOnline ? (
            <span className={css.status} style={isOnlineStl}>
              {friend.isOnline}
            </span>
          ) : (
            <span className={css.status} style={{ background: isOfflineStl }}>
              {friend.isOnline}
            </span>
          )}

          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="56px"
            height="56px"
          />
          <p className={css.name}>{friend.name}</p>
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
