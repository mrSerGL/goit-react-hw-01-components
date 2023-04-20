import user from '../data/user';
import Profile from './profile/Profile';
import Section from './section/Section';

export const App = () => {
  return (
    <div>
      {/* <Section title="User profile">
        <Profile user={user} />
      </Section> */}
      <Profile user={user} />
    </div>
  );
};
