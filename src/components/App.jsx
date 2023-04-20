import user from '../data/user';
import stats from '../data/data'

import Section from './section/Section';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';

import './App'


export const App = () => {
  return (
    <div className='container'>
      <Section title="User profile">
        <Profile user={user} />
      </Section>

      <Statistics title="Upload stats" stats = {stats}/> 
      {/* <Statistics stats = {stats}/>  */}


    </div>
  );
};
