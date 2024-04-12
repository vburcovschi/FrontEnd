import './App.css';
import Message from "./components/Message";
import List from "./components/List";
import LikeButton from "./components/LikeButton";
import UserCard from "./components/UserCard";
import EmailSend from "./components/EmailSend";
import SearchBox from "./components/SearchBox";
import BirthdayCounter from "./components/BirthdayCounter";

function App() {
  const orderList = [
    { name: 'Item 1', urgent: true, done: false },
    { name: 'Item 2', urgent: false, done: true },
    { name: 'Item 3', urgent: true, done: false },
    { name: 'Item 4', urgent: false, done: false },
    { name: 'Item 5', urgent: true, done: true }
  ];

    const user = [
        {name: 'Gicu Popescu',email: 'gicu@example.com',avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'},
        {name: 'Vitalie Burcovschi', email: 'ivan@example.com', avatarUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
        ];

    const items = ['apple', 'pineapple', 'orange', 'apricot', 'lime', 'lemon', 'plum'];

    const birthdayDate = new Date('2024-10-26');

    return (
    <div className="App">
       <Message name={'Vitalie'} />
        <List orderList={orderList} />
        <LikeButton initialLikeNumber={0} />
        <UserCard name={user[0].name} email={user[0].email} avatar={user[0].avatarUrl} />
        <UserCard name={user[1].name} email={user[1].email} avatar={user[1].avatarUrl} />
        <EmailSend />
        <SearchBox items={items}/>
        {/*<BirthdayCounter />*/}
        <BirthdayCounter birthdayDate = {birthdayDate}/>
        {/*<img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' alt="User Avatar"></img>*/}
    </div>
  );
}

export default App;
