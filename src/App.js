import './App.scss';
import Home from "./Home/Home";
import {Navigate, Route, Routes} from "react-router";
import Follower from "./Home/Follower/Follower";
import Profile from "./Home/Profile/Profile";
import Overlay from "./Helper/Overlay/Overlay";
import {useSelector} from "react-redux";
import NotAuthPage from "./Home/NotAuthPage/NotAuthPage";
import {useContext} from "react";
import AuthContext from "./Context/authCtx";

function App() {
    const showOverlay = useSelector((state=>state.overlay.showOverlay));
    const authCtx = useContext(AuthContext);
    const darkMode = useSelector(state => state.common.darkMode)

    return (
        <div className={`App ${darkMode ? 'dark' : 'light'} common`}>
            {showOverlay && <Overlay/>}
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='profilepage/my-profile' element={!authCtx.isAuth ? <NotAuthPage/> : <Profile/>}/>
                    <Route path='follower' element={!authCtx.isAuth ? <NotAuthPage/> : <Follower/>}/>
                    <Route path='' element={<Navigate to={'follower'}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
