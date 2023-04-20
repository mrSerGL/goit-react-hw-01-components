import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg';


// export default function Profile( {username, tag, location, avatar = defaultImage, stats} ) {

    export default function Profile({user}) {
const {username, tag, location, avatar = defaultImage, stats} = user

        console.log(username, tag, location, avatar, stats)
   

        return (
            <div className="profile">
              <div className="description">
                <img src={avatar} alt="User avatar" className="avatar" />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
              </div>
        
              <ul className="stats">
                <li>
                  <span className="label">Followers: </span>
                  <span className="quantity">{user.stats.followers}</span>
                </li>
                <li>
                  <span className="label">Views: </span>
                  <span className="quantity">{user.stats.views}</span>
                </li>
                <li>
                  <span className="label">Likes: </span>
                  <span className="quantity">{user.stats.likes}</span>
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
    // user.stats: PropTypes.shape,
    // user.stats: PropTypes.shape({
    //   followers: PropTypes.number,
    //   views: PropTypes.number,
    //   likes: PropTypes.number,
    // }),
};
