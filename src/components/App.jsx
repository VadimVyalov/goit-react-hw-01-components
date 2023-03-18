import Profile from './Profile/Profile';
import user from '../json/user.json';
import Statistics from './Statistics/Statistics';
import data from '../json/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../json/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';

const appStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  alignItems: 'start',
  gap: '50px',
  padding: '20px',
  justifyItems: 'center',
  color: '#010101',
};

export const App = () => {
  return (
    <div style={appStyle}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} items={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
