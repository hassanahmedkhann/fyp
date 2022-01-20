import "./App.css";
import Login from "./Components/Authentication/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Signup from "./Components/Authentication/Signup";
import MainUI from "./Components/MainUI/MainUI";
import Analytics from "./Pages/Analytics/Analytics";
function App() {
  return (
    <div className="app">
      {/* <Analytics /> */}
      <MainUI />
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
