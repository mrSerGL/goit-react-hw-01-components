import user from '../data/user';
import stats from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

// import Section from './section/Section';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendlist/FriendList';
import TransactionHistory from './transactions/TransactionHistory';


import css from './App.module.css';


export const App = () => {
  return (
    <div className="container">

      {/* <Section title="user profile">
        <Profile user={user} />
      </Section> */}

    
      <div className={css.section}>
      <Profile user={user} />
      </div>
       
      <div className={css.section}>
      <Statistics title="Upload stats" stats={stats} />
      {/* <Statistics stats = {stats}/>  */}
      </div>

      <div className={css.section}>
      <FriendList friends={friends} />
      </div>


      <div className={css.section}>
      <TransactionHistory transactions={transactions} />
      </div>

    </div>
  );
};
