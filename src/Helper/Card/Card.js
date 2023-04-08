import './Card.scss';
import Button from "../Button/Button";
const Card = () => {
    return(
        <div className='card-container'>
            <div className="profile-img-container"/>
            <div className="profile-content">
                <div className="username" style={{fontWeight:'700', fontSize:'1.25rem'}}>
                    Prince
                </div>
                <div className="profession" style={{fontWeight:'500', fontSize:'1rem'}}>
                    Student
                </div>
                <div className="follower" style={{fontWeight:'400', fontSize:'0.75rem'}}>
                    <span>70</span>
                    <span> followers</span>
                </div>
            </div>
            <button>Follow</button>

        </div>
    )

};

export default Card;