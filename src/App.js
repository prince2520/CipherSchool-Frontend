import logo from './logo.svg';
import './App.scss';
import Profile from "./Home/Profile/Profile";
import Home from "./Home/Home";
import Overlay from "./Helper/Overlay/Overlay";

function App() {
  return (
    <div className="App light common">
        <Overlay/>
        <Home/>
    </div>
  );
}

export default App;
