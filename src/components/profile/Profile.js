import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg';


// export default function Profile( {username, tag, location, avatar = defaultImage, stats} ) {

    export default function Profile({user}) {
        console.log(user)
        console.log({user})

  return (
    <div class="profile">
    <div class="description">
      <img src={user.avatar} alt="User avatar" class="avatar" />
      <p class="name">{user.username}</p>
      <p class="tag">{user.tag}</p>
      <p class="location">{user.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{}</span>
      </li>
    </ul>
  </div>
  );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    // stats: PropTypes.shape({
    //   followers: PropTypes.number,
    //   views: PropTypes.number,
    //   likes: PropTypes.number,
    // }),
};
