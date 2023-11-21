import Profile from "./components/Profile";
import Login from "./components/Login";
import "./App.css";
import Logout from "./components/Logout";
import ChangeColor from "./components/ChangeColor";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <Logout/>
      <ChangeColor/>
    </div>
  );
}

export default App;
