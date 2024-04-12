import './App.css';
import Message from "./components/Message";
import List from "./components/List";
import LikeButton from "./components/LikeButton";
import UserCard from "./components/UserCard";

function App() {
  const orderList = [
    { name: 'Item 1', urgent: true, done: false },
    { name: 'Item 2', urgent: false, done: true },
    { name: 'Item 3', urgent: true, done: false },
    { name: 'Item 4', urgent: false, done: false },
    { name: 'Item 5', urgent: true, done: true },
  ];

    const user = {
        name: 'Ivan Ivanov',
        email: 'ivan@example.com',
        avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
    };

  return (
    <div className="App">
       <Message name={'Vitalie'} />
        <List orderList={orderList} />
        <LikeButton initialLikeNumber={0} />
        <UserCard name={user.name} email={user.email} avatar={user.avatarUrl} />
        {/*<img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' alt="User Avatar"></img>*/}
    </div>
  );
}

export default App;
