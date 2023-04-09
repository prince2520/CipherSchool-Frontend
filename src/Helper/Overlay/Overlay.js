import './Overlay.scss';
import LoginSignup from "../../Authentication/LoginSignup/LoginSignup";
import {useDispatch, useSelector} from "react-redux";
import {OverlayActions} from "../../store/overlay";
import PasswordChange from "../PasswordChange/PasswordChange";
import UpdateInterest from "../UpdateInterest/UpdateInterest";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";

const Overlay = () => {
    const dispatch = useDispatch();
    const showLoginSignup = useSelector(state => state.overlay.showLoginSignUpModel)
    const showPasswordChange = useSelector(state => state.overlay.showPasswordChangeModel)
    const showUpdateInterest = useSelector(state => state.overlay.showUpdateInterestModel)
    const showProfileUpdate = useSelector(state => state.overlay.showProfileUpdateModel)

    return (
        <div className="overlay-page">
            <div className="overlay-box" onClick={() => {
                dispatch(OverlayActions.closeOverlayHandler())
            }}/>
            {showLoginSignup && <LoginSignup/>}
            {showPasswordChange && <PasswordChange/>}
            {showUpdateInterest && <UpdateInterest/>}
            {showProfileUpdate && <ProfileUpdate/>}

        </div>

    );
}

export default Overlay;