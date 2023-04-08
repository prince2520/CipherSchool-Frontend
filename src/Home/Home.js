import Navbar from "../Helper/Navbar/Navbar";
import Profile from "./Profile/Profile";

import './Home.scss'
import Follower from "./Follower/Follower";

const Home = () => {
    return(
        <div className="home-page" >
            <Navbar/>
            <Profile/>
        </div>
    )

};

export default Home;