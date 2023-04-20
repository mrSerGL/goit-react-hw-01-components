import user from '../data/user';
import Profile from './profile/Profile';
import Section from './section/Section';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="User profile">
        <Profile user={user} />
      </Section>
    </div>
  );
};
