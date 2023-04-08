import './Overlay.scss';
import LoginSignup from "../../Authentication/LoginSignup/LoginSignup";

const Overlay = () => {
    return (
        <div className='overlay-container'>
            <LoginSignup/>
        </div>

    );
}

export default Overlay;