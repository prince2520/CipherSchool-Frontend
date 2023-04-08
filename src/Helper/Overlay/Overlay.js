import './Overlay.scss';
import LoginSignup from "../../Authentication/LoginSignup/LoginSignup";
import {useDispatch} from "react-redux";
import {OverlayActions} from "../../store/overlay";

const Overlay = () => {
    const dispatch = useDispatch();

    return (
        <div className="overlay-page">
            <div className="overlay-box" onClick={() => {
                dispatch(OverlayActions.closeOverlayHandler())
            }}/>
            <LoginSignup/>
        </div>

    );
}

export default Overlay;