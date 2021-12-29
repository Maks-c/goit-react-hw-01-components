import UserCard from "../userCard/UserCard";
import Statistics from '../statistics/statistics';
import Friends from "../friendsList/Friends";
import TransactionHistory from "../transactionHistory/TransactionHistory";
//==============================
import user from '../../user.json'
import statistics from '../../statistics.json'
import friendList from '../../friendList.json'
import transaction from '../../transaction.json'
//==============================
import AppWrapper from "./appStyle";



function App() {
  return (
    <AppWrapper>
        <UserCard img={user.avatar}
                  name={user.username}
                  tag={user.tag}
                  location={user.location}
                  stats={user.stats}
        />
        <Statistics items={statistics} title='Upload Stats'/>
        <Friends items={friendList}/>
        <TransactionHistory items={transaction}/>
    </AppWrapper>
  );
}



export default App;


