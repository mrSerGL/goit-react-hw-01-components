import user from '../data/user';
import stats from '../data/data'
import friends from '../data/friends'
import transactions from '../data/transactions'

import Section from './section/Section';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendlist/FriendList';
import TransactionHistory from './transactions/TransactionHistory'

import './App'


export const App = () => {
  return (
    <div className='container'>
      <Section title="User profile">
        <Profile user={user} />
      </Section>

      <Statistics title="Upload stats" stats = {stats}/> 
      {/* <Statistics stats = {stats}/>  */}

      <FriendList friends = {friends}/> 

      <TransactionHistory transactions={transactions}/>


    </div>
  );
};
