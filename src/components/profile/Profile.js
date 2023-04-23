import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg';
import css from './Profile.module.css'

export default function Profile({ user }) {
  const { username, tag, location, avatar = defaultImage } = user;

//   console.log(username, tag, location, avatar, stats);

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar}  width="96px" height="96px"  alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers </span>
          <span className={css.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views </span>
          <span className={css.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,

  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
