import Navbar from "../Helper/Navbar/Navbar";
import Profile from "./Profile/Profile";

import './Home.scss'
import Follower from "./Follower/Follower";
import SideBar from "../Helper/Sidebar/Sidebar";
import {Outlet} from "react-router";

const Home = () => {
    return(
        <div className="home-page" >
            <Navbar/>
            <div className="home-page-left">
                <SideBar/>
            </div>
            <div className="home-page-right">
                <Outlet/>
            </div>
        </div>
    )

};

export default Home;