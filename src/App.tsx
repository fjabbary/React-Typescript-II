import "./App.css";
import Card from "./components/Card";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <UserInfo name="John Doe" age="33" email="john_doe@example.com" />
      <hr />
      <Card>
        <h2>Card Title</h2>
        <p>Cart Content</p>
      </Card>

      <Card>
        <h2>Card Title Number 2</h2>
        <p>Cart Content Number 2</p>
      </Card>
    </>
  );
}

export default App;
