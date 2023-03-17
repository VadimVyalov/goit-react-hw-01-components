import Profile from './profile/Profile';
import user from '../json/user.json';
import Statistics from './statistics/Statistics';
import data from '../json/data.json';
import FriendList from './friendList/FriendList';
import friends from '../json/friends.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
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
      <Profile props={user} />
      <Statistics title={'Upload stats'} items={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
