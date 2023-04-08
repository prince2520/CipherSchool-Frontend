import './Follower.scss';
import Card from "../../Helper/Card/Card";

const Follower = () => {
    return (
        <div className="follower-page">
            <div className="follower-page-content">
                <div className="heading">User Following You</div>
                <div className="follower-card">
                    <Card/>
                </div>
            </div>
        </div>

    );
};

export default Follower;