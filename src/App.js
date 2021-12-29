import styled from "styled-components";
import UserCard from "./components/userCard/UserCard";
import Statistics from './components/statistics/statistics';
import Friends from "./components/friendsList/Friends";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
//==============================
import user from './user.json'
import statistics from './statistics.json'
import friendList from './friendList.json'
import transaction from './transaction.json'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;
  padding: 10px;
  background: cadetblue;
  text-align: center;
`

function App() {
  return (
    <AppWrapper>
        <UserCard user={user}/>
        <Statistics items={statistics} title='Upload Stats'/>
        <Friends items={friendList}/>
        <TransactionHistory items={transaction}/>
    </AppWrapper>
  );
}

export default App;


